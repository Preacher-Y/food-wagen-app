"use client";
import React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Modal({
  open,
  onClose,
  title,
  className,
  children,
}: ModalProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        className={cn(
          "relative z-200 w-full lg:max-w-xl xl:max-w-[820px] rounded-3xl bg-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] xl:py-12",
          className
        )}
      >
        <div className="flex items-center justify-center px-6 pt-6 sm:pt-8">
          {title ? (
            <h2 className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-rate">
              {title}
            </h2>
          ) : null}
        </div>
        <div className="px-6 pb-6 pt-4 sm:px-10 sm:pb-10 sm:pt-6 xl:px-32">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
