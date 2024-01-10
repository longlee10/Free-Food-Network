"use client";
import { userUpdateSchema } from "@/app/validationSchema";
import { User } from "@prisma/client";
import { Button, TextField, Text } from "@radix-ui/themes";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  user: User;
  type: "Username" | "Password" | "Email";
}

type UserUpdateFormData = z.infer<typeof userUpdateSchema>;

const UserUpdateForm = ({ user, type }: Props) => {
  const { handleSubmit, register } = useForm<UserUpdateFormData>();
  const router = useRouter();

  return (
    <form
      className="w-1/2 m-auto"
      onSubmit={handleSubmit((data) => {
        axios.post(`/api/user/update/`, data);
        router.push("/user/profile");
        router.refresh();
      })}
    >
      <Text>Your Email:</Text>
      <TextField.Root mb="3">
        <TextField.Input defaultValue={user.email!} {...register("email")} />
      </TextField.Root>

      <Text>{`New ${type}:`}</Text>
      {type === "Email" && (
        <TextField.Root mb="3">
          <TextField.Input {...register("newEmail")} />
        </TextField.Root>
      )}

      {type === "Username" && (
        <TextField.Root mb="3">
          <TextField.Input {...register("newName")} />
        </TextField.Root>
      )}

      {type === "Password" && (
        <TextField.Root mb="3">
          <TextField.Input {...register("password")} />
        </TextField.Root>
      )}

      <Button>{`Change ${type}`}</Button>
    </form>
  );
};

export default UserUpdateForm;
