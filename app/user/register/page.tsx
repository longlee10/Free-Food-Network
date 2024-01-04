"use client";
import { Box, Text, TextField, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const RegistrationPage = () => {
  return (
    <Box className="w-1/2 m-auto text-center border-solid border-2 p-3 rounded-md">
      <Text className="font-bold text-2xl">WELCOME TO FREE FOOD NETWORK!</Text>
      <form className="mt-3">
        <TextField.Root mb="3">
          <TextField.Input placeholder="Enter email..." />
        </TextField.Root>
        <TextField.Root mb="3">
          <TextField.Input placeholder="Enter username..." />
        </TextField.Root>
        <TextField.Root mb="3">
          <TextField.Input placeholder="Enter password..." />
        </TextField.Root>
        <Flex direction="column" gap="3" align="center">
          <Button>Sign Up</Button>
          <Box>----OR----</Box>
          <Box>Already have an account?</Box>
        </Flex>
      </form>
      <Button mt="3">
        <Link href="/api/auth/signin">Sign In</Link>
      </Button>
    </Box>
  );
};

export default RegistrationPage;
