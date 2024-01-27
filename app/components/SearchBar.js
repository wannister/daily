'use client';
import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles["search-container"]}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles["search-input"]}
      />
      <button onClick={handleSearch} className={styles["search-button"]}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
