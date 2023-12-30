"use client";
import { Food } from "@prisma/client";
import { Button, TextField } from "@radix-ui/themes";

interface Props {
  food?: Food;
}

const FoodForm = ({ food }: Props) => {
  return (
    <form className="w-1/2">
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food name..."
          defaultValue={food?.name}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter image url..."
          defaultValue={food?.imgSrc}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter stock.."
          defaultValue={food?.stock}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food description..."
          defaultValue={food?.description}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food category..."
          defaultValue={food?.category}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food brand..."
          defaultValue={food?.brand}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food origin..."
          defaultValue={food?.origin}
        />
      </TextField.Root>
      <Button>Submit</Button>
    </form>
  );
};

export default FoodForm;
