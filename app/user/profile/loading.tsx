import { Flex } from "@radix-ui/themes";
import Skeleton from "../../components/Skeleton";

const ProfilePageLoading = () => {
  return (
    <Flex direction="column" className="w-1/2 m-auto">
      <Skeleton width={450} height={25} count={5} className="mt-3" />
    </Flex>
  );
};

export default ProfilePageLoading;
