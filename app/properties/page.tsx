"use client";
import { Properties } from "@/data";
import { Card, Header } from "@/app/components/core";
import SearchBar from "@/app/components/core/searchbar";
import { Footer } from "@/app/components/core";
import Image from "next/image";
import React from "react";
import { ToastContainer } from "react-toastify";

interface FilterCriteria {
  minValue: number;
  maxValue: number;
  location: string;
  rooms: string;
}

function Page() {
  return (
    <div className="min-h-screen w-full bg-white">
      <ToastContainer />
      <div className="w-full bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9] flex flex-col gap-3 pb-4">
        <Header />
        <div className="px-4 sm:px-7 ">
          <SearchBar />
        </div>
      </div>
      <div className="h-auto min-h-[50vh] px-4 sm:px-7 py-2 flex  gap-4 sm:gap-3">
        {Properties.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-10">
            <p className="text-2xl sm:text-3xl font-bold text-center">
              Sorry, no data available regarding your query
            </p>
            <Image
              src={
                "https://img.freepik.com/free-vector/memory-storage-concept-illustration_114360-3888.jpg?uid=R86992373&ga=GA1.1.1317662829.1724499322&semt=ais_hybrid"
              }
              alt="No data available"
              height={300}
              width={300}
              unoptimized
            />
          </div>
        ) : (
          <div className=" flex items-center flex-wrap justify-between gap-2">
            {Properties.map((item, key) => (
              <Card key={key} className=" w-[24%]" properties={item} />
            ))}
          </div>
        )}
      </div>
      <div className="px-4 sm:px-7 py-4 bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9]">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
