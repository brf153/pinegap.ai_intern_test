import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import upward from "@/public/upward.png";
import Image, { StaticImageData } from "next/image";
import quote from "@/public/quote.png";
import tesla from "@/public/tesla.png";
import netflix from "@/public/netflix.png";
import google from "@/public/google.png";
import nvidia from "@/public/nvidia.png";
import meta from "@/public/meta.png";
import disney from "@/public/disney.png";

type homeData = {
    logo: StaticImageData;
    header: string;
    subheader: string;
    button1: string;
    button2: string;
    };

const CardComponent = ({homeData}:{homeData:homeData}) => {
  return (
    <Card className="w-[27vw] rounded-xl flex flex-col gap-4 border-2 border-[#CBD5E1]">

      <div className="bg-[#F1F5F9] w-full flex h-fit px-[5%] py-4 border-b-2 border-[#CBD5E1]">
        <div className="flex items-center">
          <Image src={homeData.logo} alt="upward" className="w-[3vmax]" />
        </div>
        <div className="h-fit text-left">
          <p className="text-[1.4vmax] font-bold" color="text.secondary">
            {homeData.header}
          </p>
          <p className="text-[1vmax]" color="text.secondary">
            {homeData.subheader}
          </p>
        </div>
      </div>

      <div className="w-full px-4">
        <div className="flex">
          <Image src={upward} alt="upward" className="w-[1.4vmax]" />
          <Typography
            color="text.secondary"
            className="text-[1vmax] text-[#EA580C] my-auto"
            gutterBottom
          >
            Important
          </Typography>
        </div>

        <div className="py-2">
          <Typography className="text-[1.4vmax]">
            Contradiction on
          </Typography>
          <Typography className="flex gap-1 text-[1vmax]">
            <p className="font-bold">Green Energy</p>
            <p className="border text-[#94A3B8] border-[#94A3B8] text-[0.6vmax] h-fit px-1">
              New
            </p>
          </Typography>
        </div>

        <Typography className="text-[#475569] py-2 text-[1vmax]">
          Amazon has for the most part already committed to achieving zero
          emissions from their own activities. Given the company’s role as
          emulated “trend setter”, these targets set an important example for
          others.
        </Typography>

        <div className="flex gap-2 py-2">
          <p className="p-1 border-[#CBD5E1] border-2 bg-[#F8FAFC] rounded-full text-[0.7vmax]">
            {homeData.button1}
          </p>
          <p className="p-1 border-[#CBD5E1] border-2 bg-[#F8FAFC] rounded-full text-[0.7vmax]">
            {homeData.button2}
          </p>
        </div>
      </div>

      <div className="flex flex-col px-4 gap-2 py-2 pb-4">

        <div className="flex gap-1">
          <Image src={quote} alt="quote" className="w-[1vmax]" />
          <Typography variant="h5" component="div" className="text-[0.8vmax]">
            Earnings Call Q4 2023-24
          </Typography>
          <Typography
            className="text-[#94A3B8] text-[0.7vmax]"
          >
            10 APR. 2024
          </Typography>
        </div>

        <div className="flex gap-1">
          <Image src={quote} alt="quote" className="w-[1vmax]" />
          <Typography variant="h5" component="div" className="text-[0.8vmax]">
            Earnings Call Q4 2023-24
          </Typography>
          <Typography
            className="text-[#94A3B8] text-[0.7vmax]"
          >
            10 APR. 2024
          </Typography>
        </div>

      </div>
    </Card>
  );
};

export default function Home() {
    const homeData:homeData[] = [{
        logo: tesla,
        header: "Tesla",
        subheader: "TSLA",
        button1: "Contradiction",
        button2: "Green Energy"
    },
    {
        logo: disney,
        header: "Walt Disney",
        subheader: "DIS",
        button1: "Under-delivery",
        button2: "Green Energy"
    },
    {
        logo: netflix,
        header: "Netflix",
        subheader: "NFLX",
        button1: "Highlight",
        button2: "Green Energy"
    },
    {
        logo: google,
        header: "Alphabet",
        subheader: "GOOGLE",
        button1: "Contradiction",
        button2: "Green Energy"
    },
    {
        logo: nvidia,
        header: "Nvidia",
        subheader: "NVDA",
        button1: "Under-delivery",
        button2: "Green Energy"
    },
    {
        logo: meta,
        header: "Meta Platforms",
        subheader: "META",
        button1: "Highlight",
        button2: "Green Energy"
    }]
  return (
    <div className="w-screen">
      <div className="w-[85%] py-[4vh] mx-auto">
        <p className="text-[2vmax] pb-[3vh] px-[1.5vw]">Top Insights for you!</p>
        <div className="grid grid-cols-3 gap-8">
        {
            homeData.map((home) => {
                return (
                    <CardComponent homeData={home} />
                    )
                })
            }
            </div>
      </div>
    </div>
  );
}
