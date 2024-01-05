import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <p>
      {session?.user?.name
        ? `Hello,${session?.user?.name}`
        : "Welcome to Free Food Network"}
    </p>
  );
}
