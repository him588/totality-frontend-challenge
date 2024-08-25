import React from "react";
import { Header } from "../../core";
import Image from "next/image";
import AgentCard from "./agentCard";
import SearchBar from "../../core/searchbar";

function SectionOne() {
  return (
    <div className="w-full bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9] flex flex-col gap-3 pb-4">
      <div className="h-[10%]">
        <Header />
      </div>
      <div className="px-4 md:px-8 h-[400px] flex flex-col">
        <div className="h-full w-full flex flex-col md:flex-row gap-2">
          <div className="h-[300px] md:h-full w-full md:w-[70%]  rounded-2xl overflow-hidden">
            <Image
              alt=""
              src={
                "https://images.unsplash.com/photo-1719297491193-5fd6a4d04467?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={0}
              height={0}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-[300px] md:h-full w-full md:w-[30%] relative bg-white rounded-2xl p-3 overflow-hidden">
            <AgentCard />
          </div>
        </div>
      </div>
      <div className=" w-full px-4 md:px-8">
        <SearchBar />
      </div>
    </div>
  );
}

export default SectionOne;
