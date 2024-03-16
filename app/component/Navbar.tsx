"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { SelectChangeEvent } from "@mui/material/Select";
import logo from "@/public/company_logo.png";
import Image from "next/image";
import pic from "@/public/pic.png";

type Props = {};

const Navbar = (props: Props) => {
  const [value, setValue] = React.useState("automobiles");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <div className="w-screen h-[8vh] bg-[#292F42] flex justify-between px-4 text-[#F1F5F9]">
      <div className="flex gap-[2vw] items-center">
        <div className="flex item-center gap-1">
          <Image src={logo} alt="logo" className="w-7 h-7 sm:w-8 sm:h-8" />
          <p className="text-xl">pinegap</p>
        </div>
        <div className="bg-[#292F42] hidden sm:flex sm:w-auto border-[1.5px] rounded-md border-[#475569] text-[#F1F5F9] focus:outline-none h-[70%]">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#292F42] focus:outline-none sm:p-2 placeholder:text-[#F1F5F9] rounded-lg"
          />
          <CiSearch className="w-3 h-3 sm:w-6 sm:h-6 text-gray-400 pointer-events-none mt-3 mr-2" />
        </div>
      </div>
      <div className="flex gap-4 w-fit items-center mr-6">
        <CiBellOn className="w-[3vmax] h-[3vmax] sm:w-[2vmax] sm:h-[2vmax]" />
        <IoSettingsOutline className="w-[2.7vmax] h-[2.7vmax] sm:w-[2vmax] sm:h-[2vmax]" />

          <select
            value={value}
            className="text-white border-white bg-[#292F42] p-2 hidden sm:flex"
            onChange={(event: any) => handleChange(event)}
          >
            <option value="tesla">Tesla</option>
            <option value="mercedes">Mercedes</option>
            <option value="bmw">BMW</option>
          </select>

        <Image alt="Remy Sharp" className="w-8 sm:w-10" src={pic} />
      </div>
    </div>
  );
};

export default Navbar;
