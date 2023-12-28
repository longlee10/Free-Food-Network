import { Container, Grid } from "@radix-ui/themes";
import FoodCard from "./FoodCard";

const FoodsPage = () => {
  const foods = [
    { id: 1, name: "Green Lentils", src: "/00062639364069.jpg" },
    { id: 2, name: "Brown Eggs", src: "/00062639364069.jpg" },
    { id: 3, name: "Potatoes", src: "/00062639364069.jpg" },
    { id: 4, name: "Orange", src: "/00062639364069.jpg" },
    { id: 5, name: "Milk", src: "/00062639364069.jpg" },
    { id: 6, name: "Brown Eggs", src: "/00062639364069.jpg" },
    { id: 7, name: "Potatoes", src: "/00062639364069.jpg" },
    { id: 9, name: "Orange", src: "/00062639364069.jpg" },
    { id: 9, name: "Milk", src: "/00062639364069.jpg" },
  ];

  return (
    <Container mt="5" mx="5">
      <Grid gap="5" columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}>
        {foods.map((food) => (
          <FoodCard key={food.id} name={food.name} src={food.src} />
        ))}
      </Grid>
    </Container>
  );
};

export default FoodsPage;
