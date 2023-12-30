"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

export const DeleteFoodButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const onDelete = () => {
    try {
      axios.delete(`/api/foods/${id}`);
      router.push("/foods");
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button className="w-32" mt="3" color="red">
          Delete Food
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Delete Food</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure to delete this item? This action cannot be redone.
        </AlertDialog.Description>
        <Flex mt="3">
          <AlertDialog.Cancel>
            <Button mr="3">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red" onClick={onDelete}>
              Delete Food
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
