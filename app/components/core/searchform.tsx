import React, { useState, useEffect } from "react";
import RangeSlider from "./slider";
import Dropdown from "./dropdown";
import Button from "./button";

type prop = {
  minValue: number;
  maxValue: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  value: number[];
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
  houseType: string;
  setHouseType: React.Dispatch<React.SetStateAction<string>>;
  roomValue: string;
  setRoomValue: React.Dispatch<React.SetStateAction<string>>;
};

function Searchform({
  maxValue,
  minValue,
  setOpen,
  input,
  setInput,
  value,
  setValue,
  houseType,
  setHouseType,
  roomValue,
  setRoomValue,
}: prop) {
  function handleClose() {
    setOpen(false);
  }
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className=" h-[75vh] w-[500px] bg-white rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 py-2 px-4 "
    >
      <p className=" text-2xl  text-[#252525] text-center">Booking</p>
      <div className=" mt-2">
        <p className=" text-xl text-[#252525] pl-1">Location</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Delhi,India"
          className=" w-full rounded-full border-solid border-[2px] border-[#dbdada] h-14 outline-none px-4 text-lg text-[#252525] "
        />
      </div>
      <div className=" mt-2">
        <p className="text-xl text-[#252525] pl-1">Price</p>
        <p className=" text-2xl">
          ${minValue}-${maxValue}
        </p>
        <RangeSlider value={value} setValue={setValue} />
      </div>
      <div className=" mt-2">
        <p className="text-xl text-[#252525] pl-1">Property Type</p>
        <div className=" w-full h-[50px] bg-[#eff0f4] rounded-full mt-1 p-1 flex">
          <div
            onClick={() => setHouseType("house")}
            className={`cursor-pointer flex items-center justify-center w-[33%] h-full text-lg  rounded-full transition-all duration-150 ${
              houseType === "house" ? "bg-white" : "bg-transparent"
            }`}
          >
            House
          </div>
          <div
            onClick={() => setHouseType("commercial")}
            className={`cursor-pointer flex items-center justify-center w-[33%] h-full text-lg  rounded-full transition-all duration-150 ${
              houseType === "commercial" ? "bg-white" : "bg-transparent"
            }`}
          >
            Commercial
          </div>
          <div
            onClick={() => setHouseType("for rent")}
            className={`cursor-pointer flex items-center justify-center w-[33%] h-full text-lg  rounded-full transition-all duration-150 ${
              houseType === "for rent" ? "bg-white" : "bg-transparent"
            }`}
          >
            For Rent
          </div>
        </div>
      </div>
      <div className=" mt-2 relative">
        <p className="text-xl text-[#252525] pl-1">Rooms</p>
        <Dropdown value={roomValue} setValue={setRoomValue} />
      </div>
      <div className=" flex items-center justify-center mt-2">
        <Button
          onClick={handleClose}
          className=" w-[40%] h-14 text-lg border-[2px] border-solid border-[#252525] text-[#252525] bg-transparent"
        >
          Cancel
        </Button>
        <Button className=" w-[40%] h-14 text-lg border-[2px] border-solid bg-[#252525] text-white ">
          Search
        </Button>
      </div>
    </div>
  );
}

export default Searchform;
