import { Container, Grid } from "@radix-ui/themes";
import FoodCard from "./FoodCard";

const FoodsPage = () => {
  const foods = [
    { id: 1, name: "Green Lentils", src: "/00062639364069.jpg", stock: 10 },
    { id: 2, name: "Brown Eggs", src: "/00062639364069.jpg", stock: 10 },
    { id: 3, name: "Potatoes", src: "/00062639364069.jpg", stock: 10 },
    { id: 4, name: "Orange", src: "/00062639364069.jpg", stock: 0 },
    { id: 5, name: "Milk", src: "/00062639364069.jpg", stock: 10 },
    { id: 6, name: "Brown Eggs", src: "/00062639364069.jpg", stock: 0 },
    { id: 7, name: "Potatoes", src: "/00062639364069.jpg", stock: 10 },
    { id: 9, name: "Orange", src: "/00062639364069.jpg", stock: 10 },
    { id: 9, name: "Milk", src: "/00062639364069.jpg", stock: 10 },
  ];

  return (
    <Grid gap="5" columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}>
      {foods.map((food) => (
        <FoodCard food={food} key={food.id} />
      ))}
    </Grid>
  );
};

export default FoodsPage;
