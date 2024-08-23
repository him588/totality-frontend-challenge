import React from "react";
import { Header } from "../../core";
import Image from "next/image";
import AgentCard from "./agentCard";
import SearchBar from "./searchbar";
function SectionOne() {
  return (
    <div className=" h-[110vh] w-full bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9] flex flex-col gap-3 pb-4">
      <div className=" h-[10%]">
        <Header />
      </div>
      <div className=" px-8 h-[70%] flex flex-col ">
        <div className=" h-[100%]  w-full flex gap-2">
          <div className=" h-full w-[70%] bg-red-300 rounded-2xl overflow-hidden">
            <Image
              alt=""
              src={
                "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              width={0}
              height={0}
              unoptimized
              className="h-full w-full"
            />
          </div>
          <div className=" h-full w-[30%] relative bg-white rounded-2xl p-3 overflow-hidden">
            <AgentCard />
          </div>
        </div>
      </div>
      <div className="h-[20%] w-full px-8 ">
        <SearchBar />
      </div>
    </div>
  );
}

export default SectionOne;
