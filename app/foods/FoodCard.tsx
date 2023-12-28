import { Food } from "@prisma/client";
import { Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food: { imgSrc, name, stock, id } }: { food: Food }) => {
  return (
    <Box className="px-0 py-0 pb-3 border border-slate-400 rounded-md overflow-hidden h-auto max-w-52">
      <Flex direction="column" justify="start" align="center">
        <Image src={imgSrc} alt="food image" width="208" height="20" />
        <Text mt="2" align="center">
          <Link href={`/foods/${id}`} className="font-normal hover:font-medium">
            {name}
          </Link>
        </Text>
        <Button
          mt="2"
          mx="2"
          size={{ initial: "3", sm: "3" }}
          disabled={!stock}
        >
          <Text size={{ initial: "1", sm: "3" }}>
            {stock ? "Add To Card" : "Out Of Stock"}
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};

export default FoodCard;
