'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { Calendar } from "lucide-react";
import 'react-datepicker/dist/react-datepicker.css';

const CalendarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V3m-10 2v2H5a2 2 0 00-2 2v10a2 2 0 002 2h1z"
      />
    </svg>
  );

const DatePickerWrapper = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex items-center gap-3 cursor-pointer">
    <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      dateFormat="dd MMM, yyyy"
      customInput={
        <div className="flex items-center gap-2">
          <span className="text-gray-800 text-base">
            {format(date, 'dd MMM, yyyy')}
          </span>
          <div className="bg-gray-100 p-2 rounded-full">
            <Calendar />
          </div>
        </div>
      }
    />
    </div>
  );
};

export default DatePickerWrapper;