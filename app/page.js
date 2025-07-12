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
    <div className="flex w-full h-screen">

    <div className="w-[20%] h-full">
      <Sidebar />
    </div>

    <div className="w-[53%] h-full overflow-y-auto p-4 border-r border-gray-200">
      <HeaderComponent />
      <Tracking />
      <LineChart />
      <CurrentTasks />
    </div>
  
    <div className="w-[25%] h-full">
      <RightHeader />
      <LowerRight />
    </div>
  </div>

  );
}
