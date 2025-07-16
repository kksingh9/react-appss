'use client';

import { useState } from 'react';

import dynamic from 'next/dynamic';

const DatePickerWrapper = dynamic(() => import('../components/DatePickerWrapper'), {
  ssr: false,
});

const HeaderComponent = () => {
  const [date, setDate] = useState("")
  return (
    <>
      <div>
        <div className="p-4 flex justify-between  ">
          <div>
            <h1 className="font-bold text-3xl">Hello, Margaret</h1>
            <p className="text-[grey]">Track team progress</p>
          </div>

          <div className="flex gap-2 w-[180px]">
                    
           <DatePickerWrapper/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
