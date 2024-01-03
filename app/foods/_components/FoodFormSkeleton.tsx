import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";

const FoodFormSkeleton = () => {
  return (
    <Box>
      <Skeleton width={100} height={30} className="mb-3" />
      <Skeleton count={6} className="mb-3" width={500} height={30} />
      <Skeleton width={100} height={30} />
    </Box>
  );
};

export default FoodFormSkeleton;
