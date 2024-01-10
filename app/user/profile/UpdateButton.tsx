import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  type?: string;
  label: string;
  href: string;
  data?: string;
}

const UpdateButton = ({ type, label, href, data }: Props) => {
  return (
    <Flex
      gap="3"
      align="center"
      justify="between"
      mb="3"
      direction={{ initial: "column", sm: "row" }}
    >
      <Flex gap="3">
        <Text className="font-bold">{`${label}:`}</Text>
        <Text className="text-lg">{data}</Text>
      </Flex>

      <Button color={type === "delete" ? "red" : "indigo"}>
        <Link href={href}>
          {type === "delete" ? `Delete ${label}` : `Update ${label}`}
        </Link>
      </Button>
    </Flex>
  );
};

export default UpdateButton;
