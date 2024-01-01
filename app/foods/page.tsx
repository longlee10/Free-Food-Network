import prisma from "@/prisma/client";
import { Button, Flex, Grid } from "@radix-ui/themes";
import Link from "next/link";
import Pagination from "../components/Pagination";
import FoodCard from "./FoodCard";
import dynamic from "next/dynamic";
import Skeleton from "../components/Skeleton";

interface FoodQuery {
  category: string;
  page: string;
  pageSize: string;
}

interface Props {
  searchParams: FoodQuery;
}

const CategorySelect = dynamic(() => import("./_components/CategorySelect"), {
  ssr: false,
  loading: () => <Skeleton width={150} height={28} />,
});

const PageSizeSelect = dynamic(() => import("./_components/PageSizeSelect"), {
  ssr: false,
  loading: () => <Skeleton width={120} height={28} />,
});

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
    <>
      <Flex mb="3" justify="between">
        <Flex gap="3">
          <CategorySelect />
          <PageSizeSelect />
        </Flex>
        <Button>
          <Link href="/foods/new">Add New Food</Link>
        </Button>
      </Flex>
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
    </>
  );
};

export default FoodsPage;
