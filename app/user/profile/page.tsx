import { authOptions } from "@/app/api/auth/authOptions";
import { Box, Text, Flex, Button } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import prisma from "@/prisma/client";
import UserUpdateForm from "./UserUpdateForm";

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

      <UserUpdateForm user={user} type="Username" />
      <UserUpdateForm user={user} type="Email" />

      <Text className="font-bold text-sm block" mb="1" mt="3">
        Change Password
      </Text>
      <Button>Change Password</Button>

      <Text color="red" className="font-bold text-sm block" mb="1" mt="3">
        Delete Profile
      </Text>
      <Button color="red">Delete Profile</Button>
    </Box>
  );
};

export default UserProfilePage;
