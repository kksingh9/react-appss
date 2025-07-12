'use client'
import
 { lowerRightData } from "../constants/sidebarData";
import { useState } from "react";
import { File } from "lucide-react";
import Input from "../components/Input/inputComponent";

const LowerRight = () => {
    const [data, setData] = useState("")
    const handleInput = (e) => {
        setData(e.target.value)
    }
  return (
    <>
      <div className="my-4 mx-2">
        <hr />
      </div>
      <div className="flex w-[100%] flex-col m-4">
        {lowerRightData?.map((item, index) => (
            <div key={`${index}dfd`}>
          <div className="flex">
            <span className="flex w-[40px] h-[40px] justify-center items-center bg-gray-300 rounded-full ">
              {item.name[0]}
            </span>
            <div className="flex flex-col px-2">
              <span>{item.name}</span>
              <span>{item.project}</span>
            </div>
            <span>{item.hours}</span>
            
          </div>
          <div className="m-4 flex flex-col justify-center w-[90%] bg-gray-100 p-4 rounded-2xl">
          <span>{item.comment}</span>
        </div>
        </div>
        ))}
        <div className="flex w-[95%] m-auto rounded-xl bg-gray-400 p-4">
           <File/> 
           <Input type={"text"} data={data} handleInput={handleInput} placeholder={"Enter message"}/>
        </div>
      </div>
    </>
  );
};

export default LowerRight;
