"use client";
import React from "react";

export default function InputField({
    label,
    required,
    placeholder,
    errorText,
    value,
    onChange,
    name,
    type = "text",
  }: {
    label?: string;
    required?: boolean;
    placeholder?: string;
    errorText?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    type?: string;
  }) {
    const showError = required && errorText && (!value || value.trim() === "");
    
    return (
      <div className="space-y-1.5">
        {label && <label className="block text-sm font-semibold text-zinc-700">{label}</label>}
        <input
          name={name}
          type={type}
          value={value || ""}
          onChange={onChange}
          className="w-full rounded-lg border border-zinc-200 bg-zinc-100 px-3 lg:py-2 xl:py-4 xl:text-lg outline-none placeholder:text-zinc-400"
          placeholder={placeholder}
          aria-required={required}
        />
        {showError ? (
          <p className="text-sm text-hero-light">{errorText}</p>
        ) : null}
      </div>
    );
  }