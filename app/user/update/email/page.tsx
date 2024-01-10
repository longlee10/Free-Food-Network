import { authOptions } from "@/app/api/auth/authOptions";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import UserUpdateForm from "../UserUpdateForm";

const UpdateEmailPage = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });

  if (!user) return <p></p>;

  return <UserUpdateForm type="Email" user={user!} />;
};

export default UpdateEmailPage;
