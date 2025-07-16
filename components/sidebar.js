'use client'
import { sideFooter, sidesData } from "@/constants/sidebarData";
import { LogsIcon } from "lucide-react";
import Button from "./Button/Button";
import { useState } from "react";

const Sidebar = () => {
  const [clickItem, setClickItem] = useState("")
  const [footer, setFooter] = useState("")
  return (
    <>
      <div className=" w-[100%] border-r-1 h-full border-gray-300">
        <div className="flex p-4 gap-2">
          <span>
            <LogsIcon />
          </span>
          <span className="font-bold">logip</span>
        </div>

        {sidesData.map((item) => (
          <div
            key={item.data}
            className={`flex gap-2 p-4  cursor-pointer hover:text-[black] ${
              item.data === clickItem ? "font-bold text-[black]" : "text-[gray]"
            }`}
            onClick={() => {setClickItem(item.data)}}
          >
            <span>{item.icons}</span>
            <span>{item.data}</span>
          </div>
        ))}

        <div className="m-4 flex flex-col justify-center w-[90%] bg-gradient-to-b from-gray-200 to-gray-50 p-4 rounded-t-2xl">
          <div className="flex justify-center">
            <span className="font-bold">Upgrade to Pro</span>
          </div>
          <div className="flex justify-center">
            <span>Get 1 month free</span>
          </div>
          <div className="flex justify-center">
            <span>and unlock</span>
          </div>
          <Button className="p-5 border-0 bg-[#c1def6] rounded-[50px] flex justify-center mt-2 text-[black]" 
          type={"button"}
          text={"Upgrade"}
          />
          
          
        </div>
        <div className="mt-5">
        {sideFooter.map((item) => (
          <div key={item.data} className={`flex hover:text-[black] gap-2 p-4 cursor-pointer ${item.data === clickItem ? "font-bold text-[black]" : "text-[gray]"}`} 
             
          onClick={() => {setClickItem(item.data)}}>
            <span>{item.icons}</span>
            <span>{item.data}</span>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Sidebar;
