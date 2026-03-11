import jwt from "jsonwebtoken";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SECRET_KEY = process.env.SECRET_KEY ?? "";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token");

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token.value, SECRET_KEY);

    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: (decoded as { userId: number }).userId },
      select: { id: true, email: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
