import Image from "next/image";
import Navbar from "../Components/Navbar"
import SideBar from "../Components/SideBar"
import StatsCard from "../Components/StatsCard"
import SyllabusAnalysis from "../Components/SyllabusAnalysis"
import DashBoard from "../Components/Dashboard"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex">
        <SideBar/>
        <DashBoard/>
      </div>
    </div>
  );
}
