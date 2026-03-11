import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/db";

const SECRET_KEY = process.env.SECRET_KEY ?? "";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 },
    );
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 3600,
      path: "/",
    });

    return response;
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
