"use client"
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import TabButton from "@/components/ui/TabButton"
import { HandbagIcon, MotorbikeIcon, SearchIcon } from "lucide-react";

type Props = {
  onSearch?: (query: string) => void;
};

export default function Search({ onSearch }: Props) {
    const [active, setActive] = useState<'Delivery'| 'Pickup'>('Delivery')
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        onSearch?.(searchQuery);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

	return (
		<div className="w-full">
			<div className="w-full max-w-[760px] rounded-2xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]">

				<div className="flex items-center gap-3 p-4 xl:p-6">
					<TabButton
						active={active}
						icon={<MotorbikeIcon className="h-4 w-4" />}
						label="Delivery"
                        onClick={()=>setActive("Delivery")}
					/>
					<TabButton
						active={active}
						icon={<HandbagIcon className="h-4 w-4" />}
						label="Pickup"
                        onClick={()=>setActive("Pickup")}
					/>
				</div>


				<div className="p-4 xl:p-6 grid md:flex items-center gap-3 border-t border-t-gray-100">
					<div className="flex min-h-12 flex-1 items-center gap-2 rounded-xl bg-zinc-100 px-3">
						<SearchIcon className="h-5 w-5 text-hero-light" />
						<input
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onKeyPress={handleKeyPress}
							placeholder="What do you like to eat today?"
							className="h-11 w-full bg-transparent text-[14px] text-black placeholder:text-zinc-400 focus:outline-none md:text-[15px]"
							aria-label="Search meals"
						/>
					</div>
                    <div>
                        <Button
                            variant="hero"
                            size="md"
                            className="rounded"
                            onClick={handleSearch}
                        >
                            <span className="inline-flex items-center gap-2">
                                <SearchIcon className="h-4 w-4 text-white" />
                                Find Meal
                            </span>
                        </Button>
                    </div>
				</div>
			</div>
		</div>
	)
}

