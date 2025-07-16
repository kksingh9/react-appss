import { ClockIcon, MoreHorizontalIcon } from "lucide-react";
import { currentData } from "@/constants/sidebarData";
import TimeRangeDropdown from "./timerangedropdown";
import { timeRange } from "@/constants/sidebarData";

const CurrentTasks = () => {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-lg text-gray-900">Current Tasks</h1>
          <span className="text-sm text-gray-500">Done 30%</span>
        </div>
       <TimeRangeDropdown timeRange={timeRange}/>
      </div>

      {/* Task list */}
      <div className="space-y-4 max-h-[230px] overflow-y-auto pr-1">
        {currentData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm text-gray-700"
          >
            {/* Icon and task title */}
            <div className="flex items-center gap-3 w-1/3">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center`}
                style={{ backgroundColor: item.bgColor || "#f3f4f6" }}
              >
                <span className="text-gray-700">{item.icons}</span>
              </div>
              <span className="font-medium">{item.data}</span>
            </div>

            {/* Status with color dot */}
            <div className="flex items-center gap-2 w-1/4">
              <span
                className={`w-2 h-2 rounded-full`}
                style={{ backgroundColor: item.dotColor || "gray" }}
              />
              <span>{item.status}</span>
            </div>

            {/* Hours with clock icon */}
            <div className="flex items-center gap-2 w-1/6 text-gray-500">
              <ClockIcon className="w-4 h-4" />
              <span>{item.hours}</span>
            </div>

            {/* More icon */}
            <div className="w-6 h-6 flex items-center justify-center">
              <MoreHorizontalIcon className="w-5 h-5 text-gray-400 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentTasks;
