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
  <div className="flex w-[100%]">
    <div className="w-[20%]">
    <Sidebar/>
    </div>
    <div className="w-[53%] relative p-4 border-r-1 ">
    <HeaderComponent />
    <Tracking />
    <LineChart />
    <CurrentTasks />
    </div>
    <div className="w-[25%]">
  ÷ <RightHeader />
    <LowerRight/>
    </div>
  </div>
  );
}
