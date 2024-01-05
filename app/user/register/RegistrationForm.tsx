"use client";
import Spinner from "@/app/components/Spinner";
import ErrorMessage from "@/app/foods/_components/ErrorMessage";
import { userRegistrationSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Text, TextField, Button, Flex, Callout } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type RegistrationFormData = z.infer<typeof userRegistrationSchema>;

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(userRegistrationSchema),
  });
  const router = useRouter();
  const [submitting, setSubmit] = useState(false);
  const [error, setError] = useState("");

  return (
    <Box className="w-1/2 m-auto text-center border-solid border-2 p-3 rounded-md">
      {error && (
        <Callout.Root mb="3" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <Text className="font-bold text-2xl">WELCOME TO FREE FOOD NETWORK!</Text>
      <form
        className="mt-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmit(true);
            await axios.post("/api/user/register", data);
            router.push("/");
            router.refresh();
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
          />
        </TextField.Root>

        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter username..."
            {...register("name")}
          />
        </TextField.Root>

        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter password..."
            {...register("password")}
            type="password"
          />
        </TextField.Root>
        <Flex direction="column" gap="3" align="center">
          <Button>{submitting && <Spinner />} Sign Up</Button>
          <Box>----OR----</Box>
          <Box>Already have an account?</Box>
        </Flex>
      </form>
      <Button mt="3">
        <Link href="/api/auth/signin">Sign In</Link>
      </Button>
    </Box>
  );
};

export default RegistrationForm;
