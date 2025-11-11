import { cn } from "@/lib/cn";

export default function TabButton({
	active,
	icon,
	label,
    onClick,
}: {
	active: 'Delivery'| 'Pickup';
	icon: React.ReactNode;
	label: string;
    onClick:()=>void
}) {
	return (
		<button
			className={cn(
				"inline-flex items-center gap-2 rounded-md px-6 py-1.5 text-[13px] font-semibold transition-colors",
                active === label ? "bg-tag/15 fill-tag text-tag":"text-zinc-500"
					
			)}
			aria-pressed={active === label}
			type="button"
            onClick={onClick}
		>
			{icon}
			<span>{label}</span>
		</button>
	);
}