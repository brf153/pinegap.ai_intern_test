"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import logo from "@/public/company_logo.png";
import Image from "next/image";
import pic from "@/public/pic.png";

type Props = {};

const Navbar = (props: Props) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="w-screen h-[8vh] bg-[#292F42] flex justify-between px-4 text-[#F1F5F9]">
      <div className="flex gap-[2vw] items-center">
        <div className="flex item-center gap-1">
          <Image src={logo} alt="logo" className="w-8 h-8" />
          <p className="text-xl">pinegap</p>
        </div>
        <div className="bg-[#292F42] border-[1.5px] rounded-md border-[#475569] text-[#F1F5F9] focus:outline-none flex h-[70%]">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#292F42] focus:outline-none p-2 placeholder:text-[#F1F5F9] rounded-lg"
          />
          <CiSearch className=" w-6 h-6 text-gray-400 pointer-events-none mt-2 mr-2" />
        </div>
      </div>
      <div className="flex gap-4 w-fit items-center mr-6">
        <CiBellOn className="text-xl w-[2vmax] h-[2vmax]" />
        <IoSettingsOutline className="text-xl w-[2vmax] h-[2vmax]" />

        <FormControl className="w-[10vmax] border-white">
          <InputLabel
            id="demo-simple-select-label"
            className="text-white w-fit border-white"
          >
            Automobiles
          </InputLabel>
          <Select
            value={age}
            label="Age"
            onChange={handleChange}
            className="text-white border-white"
          >
            <MenuItem value={10}>Tesla</MenuItem>
            <MenuItem value={20}>Mercedes</MenuItem>
            <MenuItem value={30}>BMW</MenuItem>
          </Select>
        </FormControl>

        <Image alt="Remy Sharp" className="w-10" src={pic} />
      </div>
    </div>
  );
};

export default Navbar;