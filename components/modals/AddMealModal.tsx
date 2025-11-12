"use client";
import { useState } from "react";
import Modal from "../ui/Modal";
import { Button } from "../ui/Button";
import InputField from "../ui/inputFields";
import SelectField from "../ui/SelectField";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

type Props = {
  open: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
};

export default function AddMealModal({ open, onClose, onSuccess }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    avatar: "",
    logo: "",
    open: "open",
    price: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Food name is required";
    }
    if (!formData.avatar.trim()) {
      newErrors.avatar = "Food image is required";
    }
    if (!formData.price.trim()) {
      newErrors.price = "Price is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const payload = {
        name: formData.name,
        rating: formData.rating || "0",
        avatar: formData.avatar,
        logo: formData.logo || "",
        open: formData.open === "open",
        Price: formData.price,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to add meal");

      setFormData({ name: "", rating: "", avatar: "", logo: "", open: "open", price: "" });
      setErrors({});
      onSuccess?.();
      onClose?.();
    } catch (error) {
      console.error("Error adding meal:", error);
      alert("Failed to add meal. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", rating: "", avatar: "", logo: "", open: "open", price: "" });
    setErrors({});
    onClose?.();
  };

  return (
    <Modal open={open} onClose={handleClose} title="Add a meal">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <InputField
          name="name"
          placeholder="Food name"
          required
          value={formData.name}
          onChange={handleChange}
          errorText={errors.name}
        />
        <InputField
          name="rating"
          placeholder="Food rating"
          type="number"
          value={formData.rating}
          onChange={handleChange}
        />
        <InputField
          name="price"
          placeholder="Price"
          type="number"
          required
          value={formData.price}
          onChange={handleChange}
          errorText={errors.price}
        />
        <InputField
          name="avatar"
          placeholder="Food image (link)"
          required
          value={formData.avatar}
          onChange={handleChange}
          errorText={errors.avatar}
        />
        <InputField
          name="logo"
          placeholder="Restaurant logo (link)"
          value={formData.logo}
          onChange={handleChange}
        />
        <SelectField
          name="open"
          label="Restaurant status (open/close)"
          options={["open", "close"]}
          value={formData.open}
          onChange={handleChange}
        />

        <div className="mt-6 flex flex-col-reverse gap-3 sm:mt-8 sm:flex-row sm:justify-end">
          <Button
            type="submit"
            variant="primary"
            size="md"
            className="sm:min-w-28 xl:text-lg"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Add
          </Button>
          <Button
            type="button"
            onClick={handleClose}
            variant="secondary"
            size="md"
            className="sm:min-w-28 xl:text-lg"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
}
