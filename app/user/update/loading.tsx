import { Box } from "@radix-ui/themes";
import Skeleton from "../../components/Skeleton";

const UpdateProfileLoading = () => {
  return (
    <Box className="w-1/2 m-auto flex flex-col gap-3">
      <Skeleton width={150} height={25} />
      <Skeleton width={420} height={25} />
      <Skeleton width={120} height={25} />
    </Box>
  );
};

export default UpdateProfileLoading;
