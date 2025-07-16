import { trackData } from "@/constants/sidebarData";

const Tracking = () => {
  return (
    <div className="flex flex-wrap justify-between w-full rounded-md bg-white border-t border-gray-200 py-4 px-2 shadow-sm">
      {trackData.map((item, index) => (
        <div
          key={index}
          className="flex items-center w-full sm:w-1/2 md:w-1/3 px-4 py-2 gap-3 border-gray-200"
        >
          {/* Icon circle */}
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            {item.icon}
          </div>

          {/* Text content */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">{item.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-gray-900">
                {item.value}
              </span>
              <span className={`flex items-center text-sm ${item.deltaColor}`}>
                {item.arrow}
                {item.delta}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracking;
