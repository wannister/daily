"use client";

import SearchBar from "./components/SearchBar";
import WeeklyMenu from "./components/WeeklyMenu";

import "../node_modules/material-components-web/dist/material-components-web.min.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar />
      <WeeklyMenu />
    </main>
  );
}
