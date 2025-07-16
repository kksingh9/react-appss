"use client";
import { useState } from "react";

const TimeRangeDropdown = ({timeRange}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Week");

  return (
    <div className="relative inline-block text-left">
      <span
        onClick={() => setOpen(!open)}
        className="text-sm px-4 py-1 border border-gray-300 rounded-full text-gray-700 cursor-pointer"
      >
        {selected} ▼
      </span>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-28 rounded-md bg-white shadow-lg border border-gray-200">
          <ul className="py-1">
            {timeRange.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TimeRangeDropdown;
