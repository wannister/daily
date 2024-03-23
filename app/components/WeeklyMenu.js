"use client";
import React, { useEffect, useState } from "react";
import "./WeeklyMenu.css";
import {
  Button,
  DataTable,
  DataTableCell,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
} from "rmwc";
const WeeklyMenu = () => {
  const items = [
    { item: "Breakfast", quantity: 25, price: "$2.90" },
    { item: "Lunch", quantity: 50, price: "$1.25" },
    { item: "Dinner", quantity: 10, price: "$2.35" },
  ];

  const currentWeekDays = [
    "02/19",
    "02/20",
    "02/21",
    "02/22",
    "02/23",
    "02/24",
    "02/25",
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-between p-24">
        <h1>Weekly Menu</h1>
        <DataTable>
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell>\Date</DataTableHeadCell>
                {currentWeekDays.map((day) => (
                  <DataTableHeadCell alignEnd key={day}>
                    {day}
                  </DataTableHeadCell>
                ))}
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              {items.map((item) => (
                <DataTableRow key={item.item}>
                  <DataTableCell>{item.item}</DataTableCell>
                  <DataTableCell alignEnd>{item.quantity}</DataTableCell>
                  <DataTableCell alignEnd>{item.price}</DataTableCell>
                </DataTableRow>
              ))}
            </DataTableBody>
          </DataTableContent>
        </DataTable>
      </div>
    </div>
  );
};

export default WeeklyMenu;
