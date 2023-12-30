import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { foodSchema } from "@/app/validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = foodSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newFood = await prisma.food.create({
    data: {
      name: body.name,
      imgSrc: body.imgSrc,
      stock: body.stock,
      description: body.description,
      category: body.category,
      brand: body.brand,
      origin: body.origin,
    },
  });

  return NextResponse.json(newFood, { status: 200 });
}
