import Modal from "../ui/Modal";
import { Button } from "../ui/Button";
import InputField from "../ui/inputFields";
import SelectField from "../ui/SelectField";

type Props = {
  open: boolean;
  onClose?: () => void;
};

export default function AddMealModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose} title="Add a meal">
      <form className="space-y-4 sm:space-y-5">
        <InputField
          placeholder="Food name"
          required
          errorText="Food name is required"
        />
        <InputField placeholder="Food rating" />
        <InputField placeholder="Food image (link)" />
        <InputField placeholder="Restaurant name" required />
        <InputField placeholder="Restaurant logo (link)" />
        <SelectField options={["open", "close"]} />

        <div className="mt-6 flex flex-col-reverse gap-3 sm:mt-8 sm:flex-row sm:justify-end">
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="sm:min-w-28 xl:text-lg"
          >
            Add
          </Button>
          <Button
            type="button"
            onClick={onClose}
            variant="secondary"
            size="md"
            className="sm:min-w-28 xl:text-lg"
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
