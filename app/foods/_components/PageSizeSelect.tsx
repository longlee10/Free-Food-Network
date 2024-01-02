"use client";

import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const PageSizeSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select.Root
      defaultValue="10"
      onValueChange={(pageSize) => {
        const params = new URLSearchParams(searchParams);
        params.set("pageSize", pageSize);
        params.delete("page");
        router.push(`/foods/?${params.toString()}`);
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
