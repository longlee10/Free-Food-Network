import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import UserUpdateForm from "../UserUpdateForm";

const UpdatePasswordPage = async () => {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });
  if (!user) return null;

  return <UserUpdateForm type="Password" user={user!} />;
};

export default UpdatePasswordPage;
