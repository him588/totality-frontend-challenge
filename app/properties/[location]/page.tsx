"use client";
import { searchCriteriaContext } from "@/app/components/context";
import { Header } from "@/app/components/core";
import SearchBar from "@/app/components/core/searchbar";
import React, { useContext } from "react";

function Page() {
  const searchCriteria = useContext(searchCriteriaContext)?.searchCriteria;
  console.log(searchCriteria);
  return (
    <div className=" min-h-screen bg-white">
      <div className=" w-full bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9] flex flex-col gap-3 pb-4">
        <Header />
        <div className=" px-7 h-[120px]">
          <SearchBar />
        </div>
      </div>
      <div className=" min-h-[80vh]"></div>
    </div>
  );
}

export default Page;
