"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturedMeals from "@/components/FeaturedMeals";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main>
      <Hero onSearch={handleSearch} />
      <FeaturedMeals searchQuery={searchQuery} />
    </main>
  );
}
