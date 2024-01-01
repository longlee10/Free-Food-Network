import { Box, Grid, Flex } from "@radix-ui/themes";
import Skeleton from "../components/Skeleton";

const FoodPageLoading = () => {
  const skeletons = [1, 2, 3, 4, 5];
  return (
    <Box>
      <Flex justify="between" mb="3">
        <Flex gap="3">
          <Skeleton width={150} height={28} />
          <Skeleton width={120} height={28} />
        </Flex>
        <Skeleton width={120} height={28} />
      </Flex>
      <Grid gap="5" columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}>
        {skeletons.map((skeleton) => (
          <Skeleton key={skeleton} width={208} height={230} />
        ))}
      </Grid>
    </Box>
  );
};

export default FoodPageLoading;
