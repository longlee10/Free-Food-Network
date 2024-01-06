import { Container, Flex } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { MdFoodBank } from "react-icons/md";
import { authOptions } from "./api/auth/authOptions";

const NavBar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="border-b mb-3 px-3 py-3">
      <Container>
        <Flex justify="between">
          <Flex gap="5" align="center">
            <Link href="/">
              <MdFoodBank size="25" />
            </Link>
            <Link href="/">Free Food Network</Link>
            <Link href="/foods">Foods</Link>
          </Flex>
          {!session?.user && (
            <Flex gap="5">
              <Link href="/api/auth/signin">Sign In</Link>
              <Link href="/user/register">Sign Up</Link>
            </Flex>
          )}

          {session?.user && (
            <Flex gap="5">
              <Link href="/api/auth/signout">Sign Out</Link>
              <Link href="/user/update-password">{session.user!.name}</Link>
            </Flex>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
