"use client";
import { Select } from "@radix-ui/themes";
import { useSearchParams, useRouter } from "next/navigation";

const CategorySelect = () => {
  const categories = [
    { value: "protein", label: "Protein" },
    { value: "vegetables", label: "Vegetables" },
    { value: "fruits", label: "Fruits" },
    { value: "carb", label: "Carb" },
    { value: "dairy", label: "Dairy" },
  ];
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <Select.Root
      defaultValue=""
      onValueChange={(category) => {
        const params = new URLSearchParams(searchParams);
        params.set("category", category);
        const query = params.size ? `?${params.toString()}` : "";
        router.push(`/foods/${query}`);
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
