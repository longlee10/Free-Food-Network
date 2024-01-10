import { authOptions } from "@/app/api/auth/authOptions";
import { Box, Text, Flex, Button } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import prisma from "@/prisma/client";
import UserUpdateForm from "../update/UserUpdateForm";
import UpdateButton from "./UpdateButton";

const UserProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });

  if (!user) return null;
  return (
    <Box className="lg:w-1/3 md:w-1/2 m-auto mt-3">
      <Text className="uppercase font-bold sm:text-sm md:text-xl lg:text-2xl">
        Profile Settings
      </Text>

      <UpdateButton href="/user/update/email" label="Update Email" />
      <UpdateButton href="/user/update/username" label="Update Username" />
      <UpdateButton href="/user/update/password" label="Update Password" />
      <UpdateButton
        href="/user/update/delete"
        type="delete"
        label="Delete Profile"
      />
    </Box>
  );
};

export default UserProfilePage;
