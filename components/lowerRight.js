import { lowerRightData } from "../constants/sidebarData";
import ChatInputBar from "./chatInput";

const LowerRight = () => {
  return (
    <>
      <div className="flex items-center my-4 mx-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm uppercase">Active</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex w-[100%] h-[370px] flex-col m-2 my-4 overflow-y-auto">
        {lowerRightData?.map((item, index) => (
          <div key={`${index}dfd`}>
            <div className="flex">
              <span className="flex w-[40px] h-[40px] justify-center items-center bg-gray-300 rounded-full font-bold ">
                {item.name[0]}
              </span>
              <div className="flex flex-col px-2">
                <span className="font-bold">{item.name}</span>
                <div className="flex gap-x-1">
                  <span className="text-[#a9a9a9] text-[14px]">
                    {"Commented on "}
                  </span>
                  <span className="text-[#76abc5] text-[14px]">
                    {" "}
                    {item.project}
                  </span>
                </div>
              </div>
              <span>{item.hours}</span>
            </div>

            {item.comment ? (
              <div className="m-4 flex justify-end">
                <div className="bg-[#e7eefd] p-4 rounded-2xl max-w-[80%]">
                  <span>{item.comment}</span>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <ChatInputBar />
    </>
  );
};

export default LowerRight;
