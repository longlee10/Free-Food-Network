import { Button, Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

interface Food {
  src: string;
  name: string;
}

const FoodCard = ({ src, name }: Food) => {
  return (
    <Card style={{ maxWidth: 200, height: "auto" }}>
      <Flex direction="column" justify="start" align="center">
        <Image src={src} alt="food image" width="200" height="20" />
        <Text>{name}</Text>
        <Button mt="2">Add To Cart</Button>
      </Flex>
    </Card>
  );
};

export default FoodCard;
