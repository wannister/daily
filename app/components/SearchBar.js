"use client";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import mockData from "./mockData.json";
import Button from "@mui/material/Button";
import Image from "next/image";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [hideSearchResultList, setHideSearchResultList] = useState(true);
  const [selectedResult, setSelecteddResult] = useState(null);

  const currentWeekDays = [
    "02/19",
    "02/20",
    "02/21",
    "02/22",
    "02/23",
    "02/24",
    "02/25",
  ];
  const handleSearch = (input) => {
    setHideSearchResultList(false);
    setSearchInput(input);
    if (!input) {
      setSearchResult([]);
    } else {
      setSearchResult(
        mockData.filter(
          (data) => data.name.includes(input) || data.ingredient.includes(input)
        )
      );
    }
  };

  //Todo
  const handleSearchOnline = () => {};

  const showReceiptDetails = (result) => {
    setHideSearchResultList(true);
    setSelecteddResult(result);
    console.log(result);
  };
  console.log(selectedResult);
  console.log(searchResult);
  return (
    <div>
      <div className={styles["search-container"]}>
        <input
          className={styles["search-input"]}
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setHideSearchResultList(false)}
        />
        <Button
          label="Search Online (TODO)"
          onClick={handleSearchOnline}
          raised
          disabled
        />
      </div>
      <ul
        className={styles["menu-search-result-list"]}
        hidden={hideSearchResultList}
      >
        {searchResult.map((result) => (
          <li
            key={result.id}
            className={styles["menu-search-result-list-item"]}
            onClick={() => showReceiptDetails(result)}
          >
            {result.name}
            <Image
              src={result.image}
              alt={result.name}
              width={52}
              height={39}
            />
          </li>
        ))}
      </ul>
      {selectedResult !== null ? (
        <div>
          <h2>{selectedResult.name}</h2>
          <p>配料: {selectedResult.ingredient}</p>
          <Image
            src={selectedResult.image}
            alt={selectedResult.name}
            width={320}
            height={240}
          />
          {/* <Select label="Date" options={currentWeekDays} />
          <Select lable="meal" options={["Breakfast", "Lunch", "Dinner"]} /> */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Date</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={'03/10'}
              label="Date"
              // onChange={handleChange}
            >
              {currentWeekDays.map((day) => (
                <MenuItem key={day}>{day}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Meal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-meal"
              // value={'03/10'}
              label="Meal"
              // onChange={handleChange}
            >
              {["Breakfast", "Lunch", "Dinner"].map((meal) => (
                <MenuItem key={meal}>{meal}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained">Add</Button>
          <Button variant="contained" color="success">
            Success
          </Button>{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
