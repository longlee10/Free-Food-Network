"use client";
import { foodSchema } from "@/app/validationSchema";
import { Food } from "@prisma/client";
import { Box, Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

type FoodFormData = z.infer<typeof foodSchema>;

const FoodForm = ({ food }: { food?: Food }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodFormData>({ resolver: zodResolver(foodSchema) });
  const router = useRouter();
  const [isSubmitting, setSubmit] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmit(true);
      if (food) await axios.patch(`/api/foods/${food.id}`, data);
      else await axios.post("/api/foods", data);
      router.push("/foods");
      router.refresh();
    } catch (err) {
      console.log(errors.name);
      setSubmit(false);
      setError("An unexpected error occurred.");
    }
  });

  return (
    <Box>
      {error && (
        <Callout.Root className="w-1/2" mb="3" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="w-1/2" onSubmit={onSubmit}>
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter food name..."
            defaultValue={food?.name}
            {...register("name")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.imgSrc?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter image url..."
            defaultValue={food?.imgSrc}
            {...register("imgSrc")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.stock?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter stock.."
            defaultValue={food?.stock}
            {...register("stock", { valueAsNumber: true })}
            type="number"
          />
        </TextField.Root>
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter food description..."
            defaultValue={food?.description}
            {...register("description")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.category?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter food category..."
            defaultValue={food?.category}
            {...register("category")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.brand?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter food brand..."
            defaultValue={food?.brand}
            {...register("brand")}
          />
        </TextField.Root>
        <ErrorMessage>{errors.origin?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter food origin..."
            defaultValue={food?.origin}
            {...register("origin")}
          />
        </TextField.Root>
        <Button disabled={isSubmitting}>
          {isSubmitting && <Spinner />}
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
    </Box>
  );
};

export default FoodForm;
