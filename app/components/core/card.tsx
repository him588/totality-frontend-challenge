import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "./button";

function Card({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        " min-w-[300px] min-h-[300px] rounded-2xl bg-white  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-2",
        className
      )}
    >
      <div className="h-[400px] w-full rounded-2xl overflow-hidden ">
        <Image
          src={
            "https://images.unsplash.com/photo-1722491945502-abb7235593f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfDF8MHx8fDA%3D"
          }
          alt=""
          height={0}
          width={0}
          unoptimized
          className="h-full w-full"
        />
      </div>
      <div className=" flex items-center  justify-between py-2">
        <p className=" font-semibold text-xl  ">Modern Family Home</p>
        <p className=" font-semibold text-xl  ">$300</p>
      </div>
      <p>A spacious and modern home perfect for a growing family.</p>
      <Button className=" mt-4 w-full rounded-xl h-[50px] text-lg">
        Book Now
      </Button>
    </div>
  );
}

export default Card;
