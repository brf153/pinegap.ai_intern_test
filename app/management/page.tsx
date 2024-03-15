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
        <div className="flex gap-2 px-[5vw]">
          <Image src={netflix} alt="chart" className="w-[4vmax]" />
          <div className="flex flex-col justify-center">
            <h1 className="text-[1.3vmax]">Netflix</h1>
            <p className="text-[#64748B]">NFLX</p>
          </div>
        </div>
        <div className="mx-auto flex items-center">
          <button className="text-[#475569] bg-white border border-[#CBD5E1] p-2 m-2 rounded-xl">
            Insights
          </button>
          <button className="text-[#475569] hover:border hover:border-[#CBD5E1] hover:bg-white p-2 m-2 rounded-xl">
            Team
          </button>
          <button className="text-[#475569] hover:border hover:border-[#CBD5E1] hover:bg-white p-2 m-2 rounded-xl">
            Documents
          </button>
          <button className="text-[#475569] hover:border hover:border-[#CBD5E1] hover:bg-white p-2 m-2 rounded-xl">
            Compare
          </button>
        </div>
      </div>

      <div className="flex w-[70%] mx-auto justify-between mt-10 gap-[5vmax]">
        {upperCard.map((card, index) => (
          <Card key={index} className="w-[20vw] p-4 border border-[#E2E8F0]">
            <h1 className="text-[1.4vmax] font-bold">{card}</h1>
            <p className="text-[#475569]">Avg. Tenure of Executives</p>
          </Card>
        ))}
      </div>

      <div className="w-[70%] mx-auto justify-center grid grid-cols-3 gap-x-[5vw] gap-y-[6vh] mt-[6vh]">
{
  Array(6).fill(0).map((_,index)=>(
        <Card key={index} className="w-[20vw]">
          <div className="flex p-2 gap-4">
            <RxAvatar className="w-6 h-6 text-[#64748B]" />
            <p className="text-xl font-bold">Tim Cook</p>
          </div>

          <div className="flex px-4 gap-4">
            <div className="flex flex-col">
              <h1 className="text-[#94A3B8]">COMPENSATION</h1>
              <p className="flex">
                <GoDotFill className="text-[#22C55E] mt-1" />

                <p> USD 556.67k</p>
              </p>
            </div>
            <div>
              <h1 className="text-[#94A3B8]">TENURE</h1>
              <p className="flex"><GoDotFill className="text-[#22C55E] mt-1" /><p>12 yrs 3 mons</p></p>
            </div>
          </div>

          <Image src={graph} alt="graph" className="w-[20vw]" />
        </Card>
  ))
}
  </div>

</div>
);
};

export default Management;
