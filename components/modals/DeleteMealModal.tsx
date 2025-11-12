"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { type Meal } from "../MealCard";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

type Props = {
  open: boolean;
  onClose?: () => void;
  meal?: Meal | null;
  onSuccess?: () => void;
};

export default function DeleteMealModal({ open, onClose, meal, onSuccess }: Props) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!meal) return;

    setIsDeleting(true);
    try {
      const response = await fetch(`${API_URL}/${meal.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete meal");

      onSuccess?.();
      onClose?.();
    } catch (error) {
      console.error("Error deleting meal:", error);
      alert("Failed to delete meal. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="Delete Meal">
      <p className="px-1 text-center text-sm text-zinc-500">
        Are you sure you want to delete this meal? Actions cannot be reversed.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
        <Button
          variant="primary"
          size="md"
          className="sm:min-w-28"
          onClick={handleDelete}
          isLoading={isDeleting}
          disabled={isDeleting}
        >
          Yes
        </Button>
        <Button
          variant="secondary"
          size="md"
          className="sm:min-w-28"
          onClick={onClose}
          disabled={isDeleting}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
}



