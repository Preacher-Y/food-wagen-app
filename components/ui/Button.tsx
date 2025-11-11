 "use client"
import React from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "hero"
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
    loadingText?:string;
	isLoading?: boolean;
};

const baseStyles =
	"inline-flex w-full items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-85 disabled:cursor-not-allowed";

 const variantStyles: Record<ButtonVariant, string> = {
 	primary:
 		"bg-gradient-to-br from-button-light to-button-dark text-white shadow-button-shadow rounded-xl",
 	secondary:
 		"bg-white text-black border border-button-light hover:bg-zinc-50 rounded-xl",
    hero:
        "bg-gradient-to-br from-hero-light to-hero-dark text-white rounded-lg"
  };

const sizeStyles: Record<ButtonSize, string> = {
	sm: "py-2 px-4 text-sm",
	md: "py-3.5 px-10 text-sm",
	lg: "py-4 px-6 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = "primary",
			size = "md",
			isLoading = false,
            loadingText,
			children,
			disabled,
			...props
		},
		ref
	) => {
		const isDisabled = disabled || isLoading;
		return (
			<button
				ref={ref}
				className={cn(
					baseStyles,
					variantStyles[variant],
					sizeStyles[size],
					"min-w-24 cursor-pointer",
					className
				)}
				disabled={isDisabled}
				{...props}
			>
 				{isLoading ? (
					<span className="relative flex items-center">
						<span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
 						<span className="opacity-90">{loadingText ?? "Loading..."}</span>
					</span>
				) : (
					<>
						{children}
					</>
				)}
			</button>
		);
	}
);

Button.displayName = "Button";

export default Button;


