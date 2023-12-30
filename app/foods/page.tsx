import { Button, Grid } from "@radix-ui/themes";
import FoodCard from "./FoodCard";
import prisma from "@/prisma/client";
import Link from "next/link";

const FoodsPage = async () => {
  const foods = await prisma.food.findMany();

  return (
    <>
      <Button mb="3">
        <Link href="/foods/new">Add NewFood</Link>
      </Button>
      <Grid gap="5" columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}>
        {foods.map((food) => (
          <FoodCard food={food} key={food.id} />
        ))}
      </Grid>
    </>
  );
};

export default FoodsPage;
