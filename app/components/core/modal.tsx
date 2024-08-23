"use client";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import RangeSlider from "./slider";
import Dropdown from "./dropdown";
import Button from "./button";

export default function BasicModal({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  //   const [open, setOpen] = useState(true);
  // const [value, setValue] = useState<number[]>([100, 400]);
  const handleClose = () => setOpen(false);
  // const [minValue, setMinValue] = useState(100);
  // const [maxValue, setMaxValue] = useState(600);
  // const [houseType, setHouseType] = useState("house");
  // const [roomValue, SetRoomValue] = useState("2-3");
  // useEffect(() => {
  //   if (value[0] > value[1]) {
  //     setMinValue(value[1]);
  //     setMaxValue(value[0]);
  //   } else {
  //     setMinValue(value[0]);
  //     setMaxValue(value[1]);
  //   }
  // }, [value]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          onClick={() => setOpen(false)}
          className="h-full w-full flex items-center justify-center"
        >
          {children}
          {/* <div
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
              <Dropdown />
            </div>
            <div className=" flex items-center justify-center mt-2">
              <Button className=" w-[40%] h-14 text-lg border-[2px] border-solid border-[#252525] text-[#252525] bg-transparent">
                Cancel
              </Button>
              <Button className=" w-[40%] h-14 text-lg border-[2px] border-solid bg-[#252525] text-white ">
                Search
              </Button>
            </div>
          </div> */}
        </div>
      </Modal>
    </div>
  );
}
