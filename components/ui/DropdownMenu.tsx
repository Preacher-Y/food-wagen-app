"use client"
import * as React from "react";
import { cn } from "@/lib/cn";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";

export type DropdownMenuProps = {
	onEdit?: () => void;
	onDelete?: () => void;
	className?: string;
	triggerClassName?: string;
};

export default function DropdownMenu({
	onEdit,
	onDelete,
	className,
	triggerClassName,
}: DropdownMenuProps) {
	const [open, setOpen] = React.useState(false);
	const menuRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		}
		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [open]);

	return (
		<div ref={menuRef} className={cn("relative inline-block text-left self-start", className)}>
			<button
				aria-haspopup="menu"
				aria-expanded={open}
				className={cn(
					"flex items-end text-zinc-700",
					triggerClassName
				)}
				onClick={() => setOpen((prev) => !prev)}
			>
				<span className="sr-only">Open menu</span>
				<MoreVertical size={"20px"} />
			</button>
			{open ? (
				<div
					role="menu"
					aria-orientation="vertical"
					className="absolute right-0 z-50 overflow-hidden rounded-lg border border-zinc-200 bg-white py-1 text-sm shadow-md"
				>
					<button
						role="menuitem"
						className="flex w-full items-center gap-2 px-5 py-1 text-left hover:bg-zinc-50"
						onClick={() => {
							onEdit?.();
							setOpen(false);
						}}
					>
						Edit
					</button>
					<button
						role="menuitem"
						className="flex w-full items-center gap-2 px-5 py-1 text-left text-red-600 hover:bg-red-50"
						onClick={() => {
							onDelete?.();
							setOpen(false);
						}}
					>
						Delete
					</button>
				</div>
			) : null}
		</div>
	);
}


