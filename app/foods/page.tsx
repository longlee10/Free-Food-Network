import { Button, Flex, Grid } from "@radix-ui/themes";
import FoodCard from "./FoodCard";
import prisma from "@/prisma/client";
import Link from "next/link";
import CategorySelect from "./_components/CategorySelect";

interface Props {
  searchParams: { category: string };
}

const FoodsPage = async ({ searchParams }: Props) => {
  const category = searchParams.category ? searchParams.category : undefined;
  const foods = await prisma.food.findMany({ where: { category: category } });

  return (
    <>
      <Flex mb="3" justify="between">
        <CategorySelect />
        <Button>
          <Link href="/foods/new">Add New Food</Link>
        </Button>
      </Flex>
      <Grid gap="5" columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}>
        {foods.map((food) => (
          <FoodCard food={food} key={food.id} />
        ))}
      </Grid>
    </>
  );
};

export default FoodsPage;
