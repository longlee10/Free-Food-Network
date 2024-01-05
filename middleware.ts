export { default } from "next-auth/middleware";

// specify protected paths:
export const config = {
  matcher: ["/foods"],
};
