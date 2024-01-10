import { Flex, Button, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  type?: string;
  label: string;
  href: string;
}

const UpdateButton = ({ type, label, href }: Props) => {
  return (
    <Flex
      gap="3"
      align="center"
      justify="between"
      mb="3"
      direction={{ initial: "column", sm: "row" }}
    >
      <Text className="font-bold text-sm">{`${label}:`}</Text>
      <Button color={type === "delete" ? "red" : "indigo"}>
        <Link href={href}>{label}</Link>
      </Button>
    </Flex>
  );
};

export default UpdateButton;
