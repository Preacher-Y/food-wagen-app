"use client";
import Image from "next/image";
import * as React from "react";
import DropdownMenu from "@/components/ui/DropdownMenu";
import { cn } from "@/lib/cn";
import { Tag, Star } from "lucide-react";

export type Meal = {
  id: string;
  name: string;
  avatar: string;
  price?: string | number;
  Price?: string | number;
  logo?: string;
  rating?: string | number;
  open?: boolean;
  createdAt?: string;
  tags?: string[];
};

export type MealCardProps = {
  meal: Meal;
  className?: string;
  onEdit?: (meal: Meal) => void;
  onDelete?: (meal: Meal) => void;
};

export default function MealCard({
  meal,
  className,
  onEdit,
  onDelete,
}: MealCardProps) {
  const priceText = meal.Price ? `$${Number(meal.Price).toFixed(2)}` : '0.00';
  const isOpen = meal.open ?? false;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white",
        className
      )}
    >

      <div className="relative aspect-4/3 w-full">

        <Image
          src={meal.avatar}
          alt={meal.name}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={false}
        />

        {priceText ? (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg bg-tag px-3.5 py-1.5 text-[20px] font-semibold text-white shadow-button-shadow">
            <Tag
              fill="white"
              stroke="#F17228"
              size={20}
              className="opacity-100"
            />
            {priceText}
          </div>
        ) : null}
      </div>

      <div className="flex items-center justify-between gap-2 my-5">

        <div className="flex items-center gap-6">

          {meal.logo ? (
            <div className="relative h-16 w-16 overflow-hidden rounded-md border border-zinc-200">
              <Image
                src={meal.logo}
                alt={`${meal.name} logo`}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          ) : null}

          <div className="flex flex-col gap-1">
            <p className="truncate text-sm font-semibold text-zinc-900">
              {meal.name}
            </p>

            <div className="flex items-center text-rate gap-2 text-sm">
              <Star size={16} className="fill-rate" />
              <span className="font-medium">{meal.rating ?? "4.5"}</span>
            </div>
          </div>
        </div>
        <DropdownMenu
          onEdit={() => onEdit?.(meal)}
          onDelete={() => onDelete?.(meal)}
          triggerClassName="bg-white"
        />
      </div>

      <div>
        <span
          className={cn(
            "inline-block rounded-2xl px-5 py-2 text-sm tracking-wideR font-semibold",
            isOpen
              ? "bg-green-100 text-green-700"
              : "bg-tag/20 text-tag"
          )}
        >
          {isOpen ? "Open" : "Closed"}
        </span>
      </div>
    </div>
  );
}
