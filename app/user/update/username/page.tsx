import { authOptions } from "@/app/api/auth/authOptions";
import { getServerSession } from "next-auth";
import UserUpdateForm from "../UserUpdateForm";
import prisma from "@/prisma/client";

const UpdateUserNamePage = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });

  if (!user) return <p></p>;

  return <UserUpdateForm type="Username" user={user!} />;
};

export default UpdateUserNamePage;
