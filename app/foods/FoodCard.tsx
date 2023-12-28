import { Food } from "@prisma/client";
import { Button, Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food: { imgSrc, name, stock, id } }: { food: Food }) => {
  return (
    <Card style={{ maxWidth: 200, height: "auto" }}>
      <Flex direction="column" justify="start" align="center">
        <Image src={imgSrc} alt="food image" width="200" height="20" />
        <Text>
          <Link href={`/foods/${id}`} className="font-normal hover:font-medium">
            {name}
          </Link>
        </Text>
        <Button mt="2" size={{ initial: "3", sm: "3" }} disabled={stock === 0}>
          <Text size={{ initial: "1", sm: "3" }}>
            {stock > 0 ? "Add To Card" : "Out Of Stock"}
          </Text>
        </Button>
      </Flex>
    </Card>
  );
};

export default FoodCard;
