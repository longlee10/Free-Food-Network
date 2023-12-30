import { Heading } from "@radix-ui/themes";
import FoodForm from "../_components/FoodForm";

const NewFoodPage = () => {
  return (
    <>
      <Heading mb="3">Add New Food</Heading>
      <FoodForm />
    </>
  );
};

export default NewFoodPage;
