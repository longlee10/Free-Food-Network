"use client";
import { foodSchema } from "@/app/validationSchema";
import { Food } from "@prisma/client";
import { Button, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FoodFormData = z.infer<typeof foodSchema>;

const FoodForm = ({ food }: { food?: Food }) => {
  const { register, handleSubmit } = useForm<FoodFormData>();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (food) await axios.patch(`/api/foods/${food.id}`, data);
      else await axios.post("/api/foods", data);
      router.push("/foods");
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <form className="w-1/2" onSubmit={onSubmit}>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food name..."
          defaultValue={food?.name}
          {...register("name")}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter image url..."
          defaultValue={food?.imgSrc}
          {...register("imgSrc")}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter stock.."
          defaultValue={food?.stock}
          {...register("stock", { valueAsNumber: true })}
          type="number"
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food description..."
          defaultValue={food?.description}
          {...register("description")}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food category..."
          defaultValue={food?.category}
          {...register("category")}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food brand..."
          defaultValue={food?.brand}
          {...register("brand")}
        />
      </TextField.Root>
      <TextField.Root mb="3">
        <TextField.Input
          placeholder="Enter food origin..."
          defaultValue={food?.origin}
          {...register("origin")}
        />
      </TextField.Root>
      <Button>Submit</Button>
    </form>
  );
};

export default FoodForm;
