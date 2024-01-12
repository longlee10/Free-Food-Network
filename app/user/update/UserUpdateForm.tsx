"use client";
import { userUpdateSchema } from "@/app/validationSchema";
import { User } from "@prisma/client";
import { Box, Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/app/foods/_components/ErrorMessage";
import { useState } from "react";
import Spinner from "@/app/components/Spinner";

interface Props {
  user: User;
  type: "Username" | "Password" | "Email";
}

type UserUpdateFormData = z.infer<typeof userUpdateSchema>;

const UserUpdateForm = ({ user, type }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserUpdateFormData>({
    resolver: zodResolver(userUpdateSchema),
  });
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  return (
    <Box>
      {error && (
        <Callout.Root className="w-1/2 m-auto" mb="3" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="w-1/2 m-auto"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmitting(true);
            await axios.post(`/api/user/update/`, {
              email: user.email,
              ...data,
            });
            router.push("/user/profile");
            router.refresh();
          } catch (err) {
            setSubmitting(false);
            setError("An unexpected error occurred.");
          }
        })}
      >
        <Text>{`New ${type}:`}</Text>
        {type === "Email" && (
          <div>
            <ErrorMessage>{errors.newEmail?.message}</ErrorMessage>
            <TextField.Root mb="3">
              <TextField.Input {...register("newEmail")} />
            </TextField.Root>
          </div>
        )}

        {type === "Username" && (
          <div>
            <ErrorMessage>{errors.newName?.message}</ErrorMessage>
            <TextField.Root mb="3">
              <TextField.Input {...register("newName")} />
            </TextField.Root>
          </div>
        )}

        {type === "Password" && (
          <div>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <TextField.Root mb="3">
              <TextField.Input {...register("password")} />
            </TextField.Root>
          </div>
        )}

        <Button>
          {submitting && <Spinner />}
          {submitting ? "Updating..." : `Update ${type}`}
        </Button>
      </form>
    </Box>
  );
};

export default UserUpdateForm;
