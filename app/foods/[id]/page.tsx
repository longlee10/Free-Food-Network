import prisma from "@/prisma/client";
import {
  Box,
  Text,
  Flex,
  Grid,
  Strong,
  Heading,
  Button,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { DeleteFoodButton } from "./DeleteFoodButton";

interface Props {
  params: { id: string };
}

const FoodDetailsPage = async ({ params: { id } }: Props) => {
  const food = await prisma.food.findUnique({
    where: { id: parseInt(id) },
  });

  const details = [
    { label: "Description: ", text: food?.description },
    { label: "Category: ", text: food?.category },
    { label: "Brand: ", text: food?.brand },
    { label: "Origin: ", text: food?.origin },
    {
      label: "Availability: ",
      text: food?.stock ? "Available" : "Unavailable",
    },
  ];

  if (!food) return null;
  return (
    <Box className="border border-slate-300 rounded-md" px="5" py="3">
      <Grid gap="5" columns={{ initial: "1", sm: "2" }}>
        <Box>
          <Heading>{food.name.toUpperCase()}</Heading>
          <Image
            src={food.imgSrc}
            alt="food"
            width="300"
            height="250"
            style={{ marginTop: "1rem" }}
          ></Image>
        </Box>
        <Flex direction="column" pl={{ initial: "0", md: "5" }}>
          <Heading mb="3">ITEM INFORMATION:</Heading>
          {details.map((detail) => (
            <Text>
              <Strong>{detail.label}</Strong>
              {detail.text}
            </Text>
          ))}
          <Button className="w-32" mt="3">
            <Link href={`/foods/${id}/edit`}>Edit Food</Link>
          </Button>
          <DeleteFoodButton id={id} />
        </Flex>
      </Grid>
    </Box>
  );
};

export default FoodDetailsPage;
