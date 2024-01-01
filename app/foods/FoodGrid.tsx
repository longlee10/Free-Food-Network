import { Grid } from "@radix-ui/themes";
import React from "react";
import FoodCard from "./FoodCard";
import { Food } from "@prisma/client";

const FoodGrid = ({ foods }: { foods: Food[] }) => {
  return (
    <Grid gap="5" columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}>
      {foods.map((food) => (
        <FoodCard food={food} key={food.id} />
      ))}
    </Grid>
  );
};

export default FoodGrid;
