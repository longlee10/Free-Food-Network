import { userUpdateSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = userUpdateSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (!user) return NextResponse.json("User not found", { status: 404 });

  // update password
  const hashedPw = await bcrypt.hash(body.password, 10);

  const updatedUser = await prisma.user.update({
    where: { email: body.email },
    data: { password: hashedPw },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}
