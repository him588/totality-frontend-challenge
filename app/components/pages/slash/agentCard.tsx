import React from "react";
import { FavouriteIcon } from "../../icons";
import Image from "next/image";
import { Button } from "../../core";
function AgentCard() {
  return (
    <>
      {" "}
      <div className=" flex justify-between items-center">
        <p className=" text-lg ">
          201 Prague Dr, <span className=" block">San Jose, CA 95119</span>
        </p>
        <FavouriteIcon h={25} w={25} c="black" />
      </div>
      <div className=" flex items-center justify-between mt-6">
        <div className=" flex flex-col gap-1">
          <p className="  font-semibold text-4xl">4</p>
          <p className=" text-lg">Room</p>
        </div>
        <div className=" flex flex-col gap-1">
          <p className="  font-semibold text-4xl">3</p>
          <p className=" text-lg">baths</p>
        </div>
        <div className=" flex flex-col gap-1">
          <p className="  font-semibold text-4xl">1,868</p>
          <p className=" text-lg">sqft</p>
        </div>
      </div>
      <div>
        <p className=" font-bold mt-4 text-4xl">
          $1,650{" "}
          <span className=" font-medium text-gray-400 text-lg">/night</span>
        </p>
      </div>
      <div className=" bg-[#f8f9fb] min-h-[180px] h-[30%] flex justify-between items-end rounded-lg mt-4 p-4 relative">
        <div className=" flex flex-col justify-end gap-3">
          <div className=" h-[60px] w-[60px] rounded-full overflow-hidden">
            <Image
              src={
                "https://images.unsplash.com/photo-1724166483767-1a42883ccde5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
              }
              alt=""
              className=" h-full w-full  "
              height={0}
              width={0}
              unoptimized
            />
          </div>
          <p className=" text-xl ">
            Amella <span className=" block">Stephension</span>
          </p>
        </div>
        <div className="">
          <Button
            className=" bg-transparent text-black border-[3px] border-solid border-black font-semibold py-2 px-7"
            size="large"
          >
            Contact
          </Button>
        </div>
        <p className=" absolute top-3 right-5 text-xl text-gray-500">Agent</p>
      </div>
      <Button className=" bottom-2 h-[60px] text-xl w-full mt-4">
        Book for tour
      </Button>
    </>
  );
}

export default AgentCard;
