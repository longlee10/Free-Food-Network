import { authOptions } from "@/app/api/auth/authOptions";
import prisma from "@/prisma/client";
import { Box, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
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

      {/* <UpdateButton
        data={user.email!}
        href="/user/update/email"
        label="Email"
      /> */}
      <Box>
        <Text>{user.email}</Text>
        <UpdateButton
          data={user.name!}
          href="/user/update/username"
          label="Username"
        />
        <UpdateButton href="/user/update/password" label="Password" />
        <UpdateButton
          href="/user/update/delete"
          type="delete"
          label="Profile"
        />
      </Box>
    </Box>
  );
};

export default UserProfilePage;
