import { trackData } from "@/constants/sidebarData";

const Tracking = () => {
    return (
        <>
        <div className="flex border-y-1 w-[100%]">
        {trackData.map((item,index) => (
                <div key={`${index}ff`} className="flex gap-2 m-4 items-center border-x-1 border-gray-400 p-2 w-[33%]">
                  <span>{item.icons}</span>
                  <div className="flex flex-col">
                  <span>{item.data}</span>
                  <span>{item.num}</span>
                  </div>
                </div>
              ))}
              </div>
        </>
    )
}

export default Tracking;