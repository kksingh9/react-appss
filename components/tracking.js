import { trackData } from "@/constants/sidebarData";

const Tracking = () => {
  return (
    <div className="flex w-full shadow-md rounded-md bg-white border-t-1 border-gray-50 ">
      {trackData.map((item, index) => (
        <div
          key={`${index}ff`}
          className="flex gap-2 m-4 items-center border-x border-gray-200 px-4 py-2 w-[33%]"
        >
          <span>{item.icons}</span>
          <div className="flex flex-col">
            <span>{item.data}</span>
            <span>{item.num}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracking;