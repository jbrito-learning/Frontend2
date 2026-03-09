import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export async function POST(request: NextRequest) {
  try {
    const { password, email } = await request.json();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { password: hashedPassword, email },
    });

    return NextResponse.json(user);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}
