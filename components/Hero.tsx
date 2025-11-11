import Image from "next/image";
import Search from "@/components/Search";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-rate">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 py-10 md:grid-cols-2 md:py-14 lg:py-16 xl:py-20">
          <div className=" z-50 order-2 md:order-1">
            <h1 className="text-4xl font-bold text-white md:text-7xl">
              Are you starving?
            </h1>
            <p className="mt-6 max-w-[520px] text-base text-white/90 md:text-xl">
              Within a few clicks, find meals that are accessible near you
            </p>
            <div className="mt-6 md:mt-8">
              <Search />
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <div className="md:relative max-sm:opacity-70 h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] lg:h-[470px] lg:w-[590px] lg:translate-y-26">
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
