'use client'
import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <div
    onClick={onClick}
    ref={ref}
    className="flex items-center gap-2 cursor-pointer"
  >
    <span className="text-gray-800 text-base">{value}</span>
    <div className="bg-gray-100 p-2 rounded-full">
      <Calendar className="w-4 h-4 text-gray-600" />
    </div>
  </div>
));

const CalendarPicker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="relative z-[9999]">
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="dd MMM, yyyy"
        customInput={<CustomInput />}
        calendarClassName="bg-white text-black shadow-lg border border-gray-200 rounded-md p-2 z-50"
      />
    </div>
  );
};

export default CalendarPicker;
