"use client";
import React from "react";
import Card from "./card";
import { Button } from "../../core";
import { Properties } from "@/data";
import { useRouter } from "next/navigation";

function SectionTwo() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-3 px-4 py-4 ">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-3xl font-semibold ">Latest in our area</p>

        <Button
          size="small"
          onClick={() => router.push("/properties")}
          className="px-3 border-2 bg-transparent border-solid border-black text-black font-semibold text-sm sm:text-base"
        >
          View all {">"}
        </Button>
      </div>
      <div className="w-full  flex flex-col md:flex-row items-center gap-4 h-auto ">
        <div className="w-full md:w-1/2 h-full rounded-2xl">
          <Card properties={Properties[3]} />
        </div>
        <div className="w-full md:w-1/4 h-full rounded-2xl">
          <Card properties={Properties[4]} />
        </div>
        <div className="w-full md:w-1/4 h-full rounded-2xl">
          <Card properties={Properties[5]} />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
