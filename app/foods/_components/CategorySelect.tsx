"use client";
import { Select } from "@radix-ui/themes";
import { useSearchParams, useRouter } from "next/navigation";

const CategorySelect = () => {
  const categories = [
    { value: "Protein", label: "Protein" },
    { value: "Vegetables", label: "Vegetables" },
    { value: "Fruits", label: "Fruits" },
    { value: "Carb", label: "Carb" },
    { value: "Dairy", label: "Dairy" },
  ];
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <Select.Root
      defaultValue={searchParams.get("category") || ""}
      onValueChange={(category) => {
        const params = new URLSearchParams(searchParams);
        params.set("category", category);
        if (!category) params.delete("category");
        params.delete("page");
        router.push(`/foods/?${params.toString()}`);
      }}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Item value="">Filter by: All Category</Select.Item>
          {categories.map((category) => (
            <Select.Item
              key={category.value}
              value={category.value}
            >{`Filter by Category: ${category.label}`}</Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default CategorySelect;
