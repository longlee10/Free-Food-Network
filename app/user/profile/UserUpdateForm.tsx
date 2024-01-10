"use client";
import { User } from "@prisma/client";
import { Button, TextField } from "@radix-ui/themes";

interface Props {
  user: User;
  type: "Username" | "Password" | "Email";
}

const UserUpdateForm = ({ user, type }: Props) => {
  return (
    <form className="flex gap-3 mt-2">
      <TextField.Root mb="3">
        <TextField.Input
          defaultValue={type === "Username" ? user.name! : user.email!}
        />
      </TextField.Root>
      <Button>{`Change ${type}`}</Button>
    </form>
  );
};

export default UserUpdateForm;
