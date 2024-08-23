import React from "react";
import Image from "next/image";
import Card from "./card";
import { Button } from "../../core";

function SectionTwo() {
  return (
    <div className=" flex flex-col gap-3 px-7 py-4">
      <div className=" flex items-center justify-between">
        <p className="text-4xl font-semibold">You might be Like</p>
        <Button
          size="medium"
          className=" px-6 border-[2px] bg-transparent border-solid border-black text-black font-semibold"
        >
          View all {">"}
        </Button>
      </div>
      <div className=" w-full flex items-center gap-2 h-[75vh]">
        <div className=" w-1/2 h-full rounded-2xl">
          <Card />
        </div>
        <div className=" w-1/4 h-full  rounded-2xl">
          <Card />
        </div>
        <div className=" w-1/4 h-full  rounded-2xl">
          <Card />
        </div>
      </div>
    </div>
  );
}
export default SectionTwo;
