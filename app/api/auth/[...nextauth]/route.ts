import NextAuth, { NextAuthOptions } from "next-auth";
import { authOptions } from "../authOptions";

const handler: NextAuthOptions = NextAuth(authOptions);

export { handler as GET, handler as POST };
