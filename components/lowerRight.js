"use client";
import { lowerRightData } from "../constants/sidebarData";
import { useState } from "react";
import { File } from "lucide-react";
import Input from "../components/Input/inputComponent";

const LowerRight = () => {
  const [data, setData] = useState("");
  const handleInput = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <div className="flex items-center my-4 mx-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm uppercase">Active</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex w-[100%] h-[420px] flex-col m-2 my-4 overflow-y-auto">
        {lowerRightData?.map((item, index) => (
          <div key={`${index}dfd`}>
            <div className="flex">
              <span className="flex w-[40px] h-[40px] justify-center items-center bg-gray-300 rounded-full font-bold ">
                {item.name[0]}
              </span>
              <div className="flex flex-col px-2">
                <span className="font-bold">{item.name}</span>
                <span className="text-gray-400">{item.project}</span>
              </div>
              <span>{item.hours}</span>
            </div>

            {item.comment ? (
              <div className="m-4 flex justify-end">
                <div className="bg-gray-100 p-4 rounded-2xl max-w-[80%]">
                  <span>{item.comment}</span>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex w-[95%] m-auto rounded-xl bg-gray-200 p-4 justify-between">
        <div className="flex">
          <File />
          <Input
            type={"text"}
            data={data}
            handleInput={handleInput}
            placeholder={"Enter message"}
            className={"outline-none"}
          />
        </div>
        <button>Send</button>
      </div>
    </>
  );
};

export default LowerRight;
