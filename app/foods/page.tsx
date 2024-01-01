import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import Pagination from "../components/Pagination";
import FoodCard from "./FoodCard";
import FoodAction from "./FoodAction";

interface FoodQuery {
  category: string;
  page: string;
  pageSize: string;
}

interface Props {
  searchParams: FoodQuery;
}

const FoodsPage = async ({ searchParams }: Props) => {
  const category = searchParams.category || undefined;
  const where = { category: category };
  const page = parseInt(searchParams.page) || 1;
  const pageSize = parseInt(searchParams.pageSize) || 10;
  const foods = await prisma.food.findMany({
    where,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const foodCount = await prisma.food.count({ where });

  return (
    <Box>
      <FoodAction />
      <Grid gap="5" columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}>
        {foods.map((food) => (
          <FoodCard food={food} key={food.id} />
        ))}
      </Grid>
      <Pagination
        itemCount={foodCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </Box>
  );
};

export default FoodsPage;
