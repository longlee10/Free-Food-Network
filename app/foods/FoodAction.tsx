import dynamic from "next/dynamic";
import Skeleton from "../components/Skeleton";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const CategorySelect = dynamic(() => import("./_components/CategorySelect"), {
  ssr: false,
  loading: () => <Skeleton width={150} height={28} />,
});

const PageSizeSelect = dynamic(() => import("./_components/PageSizeSelect"), {
  ssr: false,
  loading: () => <Skeleton width={120} height={28} />,
});

const FoodAction = () => {
  return (
    <Flex mb="3" justify="between">
      <Flex gap="3">
        <CategorySelect />
        <PageSizeSelect />
      </Flex>
      <Button>
        <Link href="/foods/new">Add New Food</Link>
      </Button>
    </Flex>
  );
};

export default FoodAction;
