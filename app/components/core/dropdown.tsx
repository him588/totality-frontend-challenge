"use client";
import React, { useState } from "react";
import { DownIcon } from "../icons";

export default function Dropdown({
  value,
  setValue,
}: {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [show, setShow] = useState(false);
  //   const [value, setvalue] = useState("Select Room");
  function handleSelect(value: string) {
    setValue(value);
    setShow(false);
  }
  return (
    <div className=" relative w-full flex items-center justify-between rounded-full border-solid border-[2px] border-[#dbdada] h-14 outline-none px-4 text-lg text-[#252525] ">
      <p>{value}</p>
      <div
        onClick={() => setShow((prev) => !prev)}
        className={` cursor-pointer transition-all duration-200 ${
          show ? " rotate-180" : " rotate-0"
        }`}
      >
        <DownIcon h={25} w={25} c="#252525" />
      </div>
      <div
        className={`absolute mt-[120px] bg-white  flex flex-col  items-center transition-all duration-200 ${
          show ? " h-[100px]" : "h-0 overflow-hidden"
        } `}
      >
        <p onClick={() => handleSelect("2-4")} className=" cursor-pointer">
          2-4
        </p>
        <p onClick={() => handleSelect("4-6")} className=" cursor-pointer">
          4-6
        </p>
        <p onClick={() => handleSelect("6-8")} className=" cursor-pointer">
          6-8
        </p>
      </div>
    </div>
  );
}
