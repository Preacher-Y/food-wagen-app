import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

type Props = {
  open: boolean;
  onClose?: () => void;
};

export default function DeleteMealModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Delete Meal">
      <p className="px-1 text-center text-sm text-zinc-500">
        Are you sure you want to delete this meal? Actions cannot be reversed.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
        <Button variant="primary" size="md" className="sm:min-w-28">
          Yes
        </Button>
        <Button variant="secondary" size="md" className="sm:min-w-28">
          Cancel
        </Button>
      </div>
    </Modal>
  );
}



