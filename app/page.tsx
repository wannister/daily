"use client";

import Image from "next/image";
import SearchBar from "./components/SearchBar";
import CustomCalendar from "./components/CustomCalendar";

export default function Home() {
  const handleSearch = (query: any) => {
    // Implement your search logic here
    console.log("Searching for:", query);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar onSearch={handleSearch} />
      <h1>Weekly Menu</h1>
      <CustomCalendar />
    </main>
  );
}
