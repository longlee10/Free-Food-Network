import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { foodUpdateSchema } from "@/app/validationSchema";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const validation = foodUpdateSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const food = await prisma.food.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!food) return NextResponse.json("Item not found", { status: 404 });

  const updatedFood = await prisma.food.update({
    where: { id: parseInt(params.id) },
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

  return NextResponse.json(updatedFood, { status: 200 });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const food = await prisma.food.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!food) return NextResponse.json("Item not found", { status: 404 });

  const deletedFood = await prisma.food.delete({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json(deletedFood, { status: 200 });
}
