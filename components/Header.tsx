"use client";
import Image from "next/image";
import { Button } from "./ui/Button";

export default function Header() {
  return (
    <header className="relative w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-[74px]">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.svg"
              alt="FoodWagen Logo"
              width={28}
              height={29}
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              priority
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-tag">Food</span>
              <span className="text-rate">Wagen</span>
            </h1>
          </div>

          <div className="flex items-center 2xl:translate-x-[104px] md:w-32 2xl:w-38">
            <Button
                variant="primary"
                size="sm"
                className="text-[14px] md:text-[16.5px] 2xl:text-[18px]"
            >
                Add Meal
            </Button>
          </div>
        </div>
      </div>  
    </header>
  );
}

