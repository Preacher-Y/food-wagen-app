import React from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "hero"
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
    loadingText?:string;
	isLoading?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
};

const baseStyles =
	"inline-flex w-full items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-85 disabled:cursor-not-allowed";

 const variantStyles: Record<ButtonVariant, string> = {
 	primary:
 		"bg-gradient-to-br from-button-light to-button-dark text-white shadow-button-shadow",
 	secondary:
 		"bg-white text-black border border-button-light hover:bg-zinc-50",
    hero:
        "bg-gradient-to-br from-hero-light to-hero-dark text-white"
  };

const sizeStyles: Record<ButtonSize, string> = {
	sm: "py-2 px-4 text-sm",
	md: "py-3 px-5 text-sm",
	lg: "py-4 px-6 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = "primary",
			size = "md",
			isLoading = false,
			leftIcon,
			rightIcon,
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
					"min-w-24",
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
						{leftIcon ? <span className="-ml-1">{leftIcon}</span> : null}
						{children}
						{rightIcon ? <span className="-mr-1">{rightIcon}</span> : null}
					</>
				)}
			</button>
		);
	}
);

Button.displayName = "Button";

export default Button;


