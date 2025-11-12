"use client";
import React from "react";

export default function SelectField({
    label,
    options,
    value,
    onChange,
    name,
  }: {
    label?: string;
    options: string[];
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name?: string;
  }) {
    return (
      <div className="space-y-1.5">
        {label && <label className="block text-sm font-semibold text-zinc-700">{label}</label>}
        <div className="relative">
          <select
            name={name}
            value={value || ""}
            onChange={onChange}
            className="w-full appearance-none rounded-lg border border-zinc-200 bg-zinc-100 px-3 py-3 text-sm outline-none"
          >
            <option value="">Select...</option>
            {options.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }