"use client";
import Spinner from "@/app/components/Spinner";
import { userRegistrationSchema } from "@/app/validationSchema";
import { Box, Text, TextField, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type RegistrationFormData = z.infer<typeof userRegistrationSchema>;

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm<RegistrationFormData>();
  const router = useRouter();
  const [submitting, setSubmit] = useState(false);

  return (
    <Box className="w-1/2 m-auto text-center border-solid border-2 p-3 rounded-md">
      <Text className="font-bold text-2xl">WELCOME TO FREE FOOD NETWORK!</Text>
      <form
        className="mt-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmit(true);
            axios.post("/api/user/register", data);
            router.push("/");
            router.refresh();
          } catch (err) {
            setSubmit(false);
          }
        })}
      >
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter email..."
            {...register("email")}
          />
        </TextField.Root>
        <TextField.Root mb="3">
          <TextField.Input
            placeholder="Enter username..."
            {...register("name")}
          />
        </TextField.Root>
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
