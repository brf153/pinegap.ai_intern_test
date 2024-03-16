import Image from "next/image";
import React from "react";
import { Card } from "@mui/material";
import graph from "@/public/chart.png";
import netflix from "@/public/netflix.png";
import { RxAvatar } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

type Props = {};

const Management = (props: Props) => {
  const upperCard = ["52 yrs 3mos", "12 yrs 3 mos", "12 yrs 3 mos"];
  return (
    <div className="w-screen">
      <div className="h-[10vh] flex bg-[#F1F5F9] border-b-2 border-[#E2E8F0]">
        <div className="flex gap-[2px] sm:gap-2 sm:px-[5vw] items-center">
          <Image src={netflix} alt="chart" className="w-[6vmax] h-[6vmax] sm:w-[4vmax] sm:h-[4vmax]" />
          <div className="flex flex-col justify-center">
            <h1 className="text-[1.7vmax] sm:text-[1.3vmax]">Netflix</h1>
            <p className="text-[1.4vmax] sm:text-md text-[#64748B]">NFLX</p>
          </div>
        </div>
        <div className="mx-auto flex items-center">
          <button className="text-[#475569] bg-white border border-[#CBD5E1] text-[1.6vmax] sm:text-md p-1 sm:p-2 m-2 rounded-xl">
            Insights
          </button>
          <button className="text-[#475569] hover:border hover:border-[#CBD5E1] hover:bg-white text-[1.6vmax] sm:text-md p-1 sm:p-2 m-2 rounded-xl">
            Team
          </button>
          <button className="text-[#475569] hover:border hover:border-[#CBD5E1] hover:bg-white text-[1.6vmax] sm:text-md p-1 sm:p-2 m-2 rounded-xl">
            Documents
          </button>
          <button className="text-[#475569] hover:border hover:border-[#CBD5E1] hover:bg-white text-[1.6vmax] sm:text-md p-1 sm:p-2 m-2 rounded-xl">
            Compare
          </button>
        </div>
      </div>

      <div className="flex w-[95%] sm:w-[70%] mx-auto justify-between mt-10 gap-[2vmax] sm:gap-[5vmax]">
        {upperCard.map((card, index) => (
          <Card key={index} className="sm:w-[20vw] p-4 border border-[#E2E8F0]">
            <h1 className="text-[1.6vmax] sm:text-[1.4vmax] font-bold">{card}</h1>
            <p className="text-[1.4vmax] sm:text-md text-[#475569]">Avg. Tenure of Executives</p>
          </Card>
        ))}
      </div>

      <div className="w-[95%] sm:w-[70%] mx-auto justify-center grid grid-cols-3 gap-x-[5vw] gap-y-[3vh] mt-[3vh] sm:gap-y-[6vh] sm:mt-[6vh]">
{
  Array(6).fill(0).map((_,index)=>(
        <Card key={index} className="sm:w-[20vw]">
          <div className="flex p-2 gap-2 sm:gap-4">
            <RxAvatar className="w-4 h-4 sm:w-6 sm:h-6 text-[#64748B]" />
            <p className="text-[1.3vmax] sm:text-xl font-bold">Tim Cook</p>
          </div>

          <div className="flex flex-col sm:flex-row px-1 gap-1 sm:px-4 sm:gap-4">
            <div className="flex flex-col">
              <h1 className="text-[#94A3B8] text-[1.2vmax] sm:text-md">COMPENSATION</h1>
              <p className="flex">
                <GoDotFill className="text-[#22C55E] text-xs mt-[1px] sm:text-md sm:mt-1" />

                <p className="text-[1.2vmax] sm:text-md"> USD 556.67k</p>
              </p>
            </div>
            <div>
              <h1 className="text-[#94A3B8] text-[1.2vmax] sm:text-md">TENURE</h1>
              <p className="flex"><GoDotFill className="text-[#22C55E] text-xs mt-[1px] sm:text-md sm:mt-1" /><p className="text-[1.2vmax] sm:text-md">12 yrs 3 mons</p></p>
            </div>
          </div>

          <Image src={graph} alt="graph" className="sm:w-[20vw]" />
        </Card>
  ))
}
  </div>

</div>
);
};

export default Management;
