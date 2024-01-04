import NextAuth, { NextAuthOptions } from "next-auth";
import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const handler: NextAuthOptions = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});

export { handler as GET, handler as POST };
