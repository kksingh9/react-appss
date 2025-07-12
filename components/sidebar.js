import { sideFooter, sidesData } from "@/constants/sidebarData";
import { LogsIcon } from "lucide-react";

const Sidebar = () => {
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
            className={`flex gap-2 p-4 text-[gray] ${
              item.data === "Tasks" ? "font-bold" : ""
            }`}
          >
            <span>{item.icons}</span>
            <span>{item.data}</span>
          </div>
        ))}

        <div className="m-4 flex flex-col justify-center w-[90%] bg-gray-100 p-4 rounded-t-2xl">
          <div className="flex justify-center">
            <span className="font-bold">Upgrade to Pro</span>
          </div>
          <div className="flex justify-center">
            <span>Get 1 month free</span>
          </div>
          <div className="flex justify-center">
            <span>and unlock</span>
          </div>
          <span className="p-5 border-0 bg-gray-300 rounded-[50px] flex justify-center mt-2">
            upgrade
          </span>
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
