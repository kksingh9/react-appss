import {
  PhoneCallIcon,
  VideoIcon,
  DotIcon,
  ImageIcon,
} from "lucide-react";

const RightHeader = () => {
  return (
    <>
      <div className="m-2 flex flex-col justify-center w-[97%] bg-gray-100 p-4 rounded-2xl">
        <div className="flex justify-center">
          <span className="w-[100px] h-[100px] rounded-full bg-amber-200 flex justify-center items-center">
            {" "}
            <ImageIcon />
          </span>
        </div>
        <div className="flex justify-center">
          <span>Megan Norton</span>
          </div>
          <div className="flex justify-center">
          <span>@megnorton</span>
          </div>
        
        <div className="flex gap-2 justify-center">
        <div className="w-[60px] h-[40px] rounded-full bg-gray-600 flex justify-center items-center">
          <span>
            <PhoneCallIcon className="text-amber-50" />
          </span>
          </div>
          <div className="w-[60px] h-[40px] rounded-full bg-gray-600 flex justify-center items-center">
          <span>
            <VideoIcon className="text-amber-50" />
          </span>
          </div>
          <div className="w-[60px] h-[40px] rounded-full bg-gray-600 flex justify-center items-center">
          <span>
            <DotIcon className="text-amber-50"/>
          </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightHeader;
