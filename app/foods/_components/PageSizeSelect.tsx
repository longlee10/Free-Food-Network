"use client";

import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const PageSizeSelect = () => {
  const router = useRouter();

  return (
    <Select.Root
      defaultValue="10"
      onValueChange={(pageSize) => {
        const params = new URLSearchParams();
        params.append("pageSize", pageSize);
        const query = params.size ? `?${params.toString()}` : "";
        router.push(`/foods/${query}`);
      }}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Item value="10">Page size: 10</Select.Item>
          <Select.Item value="15">Page size: 15</Select.Item>
          <Select.Item value="20">Page size: 20</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default PageSizeSelect;
