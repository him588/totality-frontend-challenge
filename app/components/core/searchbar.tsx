"use client";
import React, { useState, useEffect, useContext } from "react";
import { ApartmentIcon, BedIcon, DollarIcon, LocationIcon } from "../icons";
import { BasicModal, Button, Searchform } from ".";
import { useRouter } from "next/navigation";
import { searchCriteriaContext } from "../context";

function SearchBar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number[]>([100, 400]);
  const [input, setInput] = useState("");
  const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState(600);
  const [houseType, setHouseType] = useState("house");
  const [roomValue, setRoomValue] = useState("2-4");

  useEffect(() => {
    if (value[0] > value[1]) {
      setMinValue(value[1]);
      setMaxValue(value[0]);
    } else {
      setMinValue(value[0]);
      setMaxValue(value[1]);
    }
  }, [value]);

  const router = useRouter();
  const setSearchCriteria = useContext(
    searchCriteriaContext
  )?.setSearchCriteria;

  function handleSearch() {
    setOpen(false);
    if (input === "") {
      console.log("Please enter Location");
      return;
    }
    setSearchCriteria &&
      setSearchCriteria({
        minValue,
        maxValue,
        location: input,
        rooms: roomValue,
      });
    router.push(`/properties/${input}`);
  }

  return (
    <div className="w-full h-full py-4 bg-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 px-2">
      <BasicModal open={open} setOpen={setOpen}>
        <Searchform
          setOpen={setOpen}
          maxValue={maxValue}
          minValue={minValue}
          input={input}
          setInput={setInput}
          value={value}
          setValue={setValue}
          houseType={houseType}
          setHouseType={setHouseType}
          roomValue={roomValue}
          setRoomValue={setRoomValue}
        />
      </BasicModal>
      <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-2">
        <div className="w-full overflow-hidden md:w-[23%] h-[60px] border-[2px] border-solid border-[grey] border-opacity-50 rounded-full flex items-center gap-4 px-3">
          <LocationIcon h={30} w={30} c="#3b3b3b" />
          <div className="flex-1">
            <p className="text-[grey] text-base md:text-lg">Location</p>
            <input
              onClick={() => setOpen(true)}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              readOnly
              placeholder="Ex-Delhi"
              className="text-base md:text-lg w-full cursor-pointer outline-none font-semibold text-[#3b3b3b] text-opacity-90 placeholder:text-opacity-90 placeholder:text-[#3b3b3b]"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden md:w-[23%] h-[60px] border-[2px] border-solid border-[grey] border-opacity-50 rounded-full flex items-center gap-4 px-3">
          <ApartmentIcon h={30} w={30} c="#3b3b3b" />
          <div className="flex-1">
            <p className="text-[grey] text-base md:text-lg">Property Type</p>
            <input
              onClick={() => setOpen(true)}
              type="text"
              readOnly
              value={houseType}
              placeholder="Apartments"
              className="text-base md:text-lg w-full cursor-pointer outline-none font-semibold text-[#3b3b3b] text-opacity-90 placeholder:text-opacity-90 placeholder:text-[#3b3b3b]"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden md:w-[23%] h-[60px] border-[2px] border-solid border-[grey] border-opacity-50 rounded-full flex items-center gap-4 px-3">
          <DollarIcon h={30} w={30} c="#3b3b3b" />
          <div className="flex-1">
            <p className="text-[grey] text-base md:text-lg">Price</p>
            <input
              onClick={() => setOpen(true)}
              type="text"
              value={`$${minValue}-$${maxValue}`}
              readOnly
              placeholder="Price Range"
              className="text-base md:text-lg w-full cursor-pointer outline-none font-semibold text-[#3b3b3b] text-opacity-90 placeholder:text-opacity-90 placeholder:text-[#3b3b3b]"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden md:w-[23%] h-[60px] border-[2px] border-solid border-[grey] border-opacity-50 rounded-full flex items-center gap-4 px-3">
          <BedIcon h={30} w={30} c="#3b3b3b" />
          <div className="flex-1">
            <p className="text-[grey] text-base md:text-lg">Bedroom</p>
            <input
              onClick={() => setOpen(true)}
              type="text"
              value={roomValue}
              readOnly
              placeholder="Bedrooms"
              className="text-base md:text-lg w-full cursor-pointer outline-none font-semibold text-[#3b3b3b] text-opacity-90 placeholder:text-opacity-90 placeholder:text-[#3b3b3b]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
