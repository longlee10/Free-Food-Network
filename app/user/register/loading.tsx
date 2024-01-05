import Skeleton from "@/app/components/Skeleton";
import { Box } from "@radix-ui/themes";

const RegistrationPageLoading = () => {
  return (
    <Box className="w-1/2 m-auto text-center border-solid border-2 p-3 rounded-md pt-10">
      <Skeleton count={3} className="mb-3" height={35} />
      <Skeleton width={95} height={35} />
    </Box>
  );
};

export default RegistrationPageLoading;
