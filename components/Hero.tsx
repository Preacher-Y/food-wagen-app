import Image from "next/image";
import Search from "@/components/Search";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-rate">
      <div className="max-w-sm md:max-w-md lg:max-w-5xl 2xl:max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center py-10 md:justify-between md:flex-row md:py-10 xl:py-14  2xl:py-18">
          <div className=" z-50 order-2 md:order-1 lg:w-[600px] xl:w-[856px]">
            <h1 className="text-4xl font-bold text-white md:text-5xl xl:text-6xl 2xl:text-7xl">
              Are you starving?
            </h1>
            <p className="mt-4 md:mt-5 xl:mt-6 max-w-[520px] text-base text-white/90 md:text-sm xl:text-lg 2xl:text-[19px]">
              Within a few clicks, find meals that are accessible near you
            </p>
            <div className="mt-6 md:mt-7 xl:mt-8">
              <Search />
            </div>
          </div>

          <div className="order-1 flex justify-center">
            <div className="md:relative max-sm:opacity-70 h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] 2xl:h-[470px] 2xl:w-[590px] lg:translate-y-22 2xl:translate-y-26">
              <Image
                src="/hero.svg"
                alt="Delicious noodles bowl"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
