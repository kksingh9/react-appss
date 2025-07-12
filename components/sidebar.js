import { sideFooter, sidesData } from "@/constants/sidebarData";
import { LogsIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <>
    <div className=" w-[100%] border-r-1 h-full">
      <div className="flex p-4 gap-2">
        <span>
          <LogsIcon />
        </span>
        <span className="font-bold">logip</span>
      </div>

      {sidesData.map((item) => (
        <div key={item.data} className={`flex gap-2 p-4 text-[gray] ${item.data ==="Tasks" ? "font-bold":""}`}>
          <span>{item.icons}</span>
          <span>{item.data}</span>
        </div>
      ))}

      <div className="m-4 flex flex-col justify-center w-[90%] bg-gray-100 p-4 rounded-t-2xl">
        <span>Upgrade to Pro</span>
        <span>Get 1 month free</span>
        <span>and unlock</span>
        <span className="p-5 border-0 bg-gray-300 rounded-[50px] flex justify-center">upgrade</span>
      </div>

      {sideFooter.map((item) => (
        <div key={item.data} className="flex gap-2 p-4">
          <span>{item.icons}</span>
          <span>{item.data}</span>
        </div>
      ))}
      </div>
    </>
  );
};

export default Sidebar;
