import Modal from "../ui/Modal";
import { Button } from "../ui/Button";
import InputField from "../ui/inputFields";
import SelectField from "../ui/SelectField";

type Props = {
  open: boolean;
  onClose?: () => void;
};

export default function EditMealModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Edit Meal">
      <form className="space-y-4 sm:space-y-5">
        <InputField label="Food name" required />
        <InputField label="Food rating" />
        <InputField label="Food image (link)" />
        <InputField label="Restaurant name" required/>
        <InputField label="Restaurant logo (link)" />
        <SelectField label="Restaurant status (open/close)" options={["open", "close"]} />

        <div className="mt-6 flex flex-col-reverse gap-3 sm:mt-8 sm:flex-row sm:justify-end">
          <Button variant="secondary" size="md" className="sm:min-w-28">
            Cancel
          </Button>
          <Button variant="primary" size="md" className="sm:min-w-28">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
}
