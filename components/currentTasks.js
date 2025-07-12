import { currentData } from "@/constants/sidebarData";
const CurrentTasks = () => {
  return (
    <>
      <div className=" flex justify-between items-center ">
        
            <h1 className="font-bold text-2xl">CurrentTasks</h1>
            <span className="px-3 py-2 border-1 rounded-3xl">week</span>
            </div>
            <div className=" h-[230px] overflow-y-auto">
      {currentData.map((item,index) => (<div key={`${index}sf`} className="flex w-[100%]  gap-3" style={{
        overflowY:"scroll"
      }}>
        <span className="bg-gray-400 w-[60px] h-[40px] flex items-center justify-center rounded-full  m-4">
        <span className=" text-amber-50   ">{item.icons}</span>
        </span>
        <span className="w-[40%] m-4">{item.data}</span>
        <span className="w-[20%] m-4">{item.status}</span>
        <span className="w-[20%] m-4">{item.hours}</span>
        <span className="w-[10%] m-4">{item.dot}</span>
      </div>))}
      </div>
    </>
  );
};

export default CurrentTasks;
