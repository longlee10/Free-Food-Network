"use client";
import Spinner from "@/app/components/Spinner";
import ErrorMessage from "@/app/foods/_components/ErrorMessage";
import { userUpdateSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type UpdatePasswordData = z.infer<typeof userUpdateSchema>;

const UpdatePasswordPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UpdatePasswordData>({
    resolver: zodResolver(userUpdateSchema),
  });
  const router = useRouter();
  const [submitting, setSubmit] = useState(false);
  const [error, setError] = useState("");

  return (
    <Box className="w-1/2 m-auto text-center border-solid border-2 p-3 rounded-md">
      <Text>Update Password</Text>
      {error && (
        <Callout.Root mb="3" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="mt-3"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
          try {
            setSubmit(true);
            await axios.post("/api/user/update", data);
            router.push("/");
          } catch (err) {
            setSubmit(false);
            setError("An unexpected error occurred.");
          }
        })}
      >
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter email..."
            {...register("email")}
            type="email"
          />
        </TextField.Root>

        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter new password..."
            {...register("password")}
            type="password"
          />
        </TextField.Root>
        <Button disabled={submitting}>
          {submitting && <Spinner />} {submitting ? "Updating..." : "Update"}
        </Button>
      </form>
    </Box>
  );
};

export default UpdatePasswordPage;
