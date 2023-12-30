import { notFound } from "next/navigation";
import FoodForm from "../../_components/FoodForm";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

const EditFoodPage = async ({ params }: Props) => {
  const food = await prisma.food.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!food) notFound();
  return <FoodForm food={food} />;
};

export default EditFoodPage;
