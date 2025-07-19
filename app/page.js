import Sidebar from "@/components/sidebar";
import HeaderComponent from "../components/HeaderComponent";
import Image from "next/image";
import Tracking from "@/components/tracking";
import LineChart from "@/components/graph";
import CurrentTasks from "@/components/currentTasks";
import RightHeader from "@/components/rightHeader";
import LowerRight from "@/components/lowerRight";

export default function Home() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
    {/* Sidebar */}
    <div className="w-[20%] h-full flex-shrink-0">
      <Sidebar />
    </div>
  
    {/* Main content */}
    <div className="w-[55%] h-full overflow-y-auto p-4 border-r border-gray-200">
      <HeaderComponent />
      <Tracking />
      <LineChart />
      <CurrentTasks />
    </div>
  
    {/* Right panel */}
    <div className="w-[25%] h-full overflow-y-auto flex-shrink-0 ">
      <RightHeader />
      <LowerRight />
    </div>
  </div>

  );
}
