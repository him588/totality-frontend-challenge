"use client";
import React, { useState, useEffect, useContext } from "react";
import {
  ApartmentIcon,
  BedIcon,
  DollarIcon,
  FavouriteIcon,
  LocationIcon,
} from "../icons";
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
    <div className=" w-full h-full bg-white rounded-2xl flex items-center justify-between gap-2 px-2">
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
      <div className=" w-[20%] h-[55%] border-[2px] border-solid border-[grey] border-opacity-50 rounded-full flex items-center gap-4 px-3">
        <LocationIcon h={30} w={30} c="#3b3b3b" />
        <div>
          <p className=" text-[grey] text-xl">Location</p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex-Delhi"
            className="text-xl outline-none font-semibold text-[#3b3b3b] text-opacity-90 placeholder:text-opacity-90 placeholder:text-[#3b3b3b]"
          />
        </div>
      </div>
      <div className=" w-[20%] h-[55%] border-[2px] border-solid border-[grey] border-opacity-50 rounded-full flex items-center gap-4 px-3">
        <ApartmentIcon h={30} w={30} c="#3b3b3b" />
        <div>
          <p className=" text-[grey] text-xl">Property Type</p>
          <input
            onClick={() => setOpen(true)}
            type="text"
            readOnly
            value={houseType}
            placeholder="Apartments"
            className="text-xl cursor-pointer outline-none font-semibold text-[#3b3b3b] text-opacity-90 placeholder:text-opacity-90 placeholder:text-[#3b3b3b]"
          />
        </div>
      </div>
      <div className=" w-[20%] h-[55%] border-[2px] border-solid border-[grey] border-opacity-50 rounded-full flex items-center gap-4 px-3">
        <DollarIcon h={40} w={40} c="#3b3b3b" />
        <div>
          <p className=" text-[grey] text-xl">Price</p>
          <input
            onClick={() => setOpen(true)}
            type="text"
            value={`$${minValue}-$${maxValue}`}
            readOnly
            placeholder="Apartments"
            className="text-xl cursor-pointer outline-none font-semibold text-[#3b3b3b] text-opacity-90 placeholder:text-opacity-90 placeholder:text-[#3b3b3b]"
          />
        </div>
      </div>
      <div className=" w-[20%] h-[55%] border-[2px] border-solid border-[grey] border-opacity-50 rounded-full flex items-center gap-4 px-3">
        <BedIcon h={30} w={30} c="#3b3b3b" />
        <div>
          <p className=" text-[grey] text-xl">Bedroom</p>
          <input
            onClick={() => setOpen(true)}
            type="text"
            value={roomValue}
            readOnly
            placeholder="Apartments"
            className="text-xl cursor-pointer outline-none font-semibold text-[#3b3b3b] text-opacity-90 placeholder:text-opacity-90 placeholder:text-[#3b3b3b]"
          />
        </div>
      </div>
      <Button onClick={handleSearch} className=" w-[15%] h-[55%] text-xl">
        Search
      </Button>
      {/* <div className=" w-[15%] h-[60%] border-[2px] border-solid border-[grey] border-opacity-50 rounded-full"></div> */}
    </div>
  );
}

export default SearchBar;
