"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider({
  value,
  setValue,
}: {
  value: number[];
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
}) {
  useEffect(() => {
    console.log(value);
  }, [value]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className=" w-full">
      <Slider
        style={{ color: "#3b3b3b", height: "5px" }}
        // getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        step={100}
        // valueLabelDisplay="auto"
        min={100}
        size="medium"
        max={12000}
        // color={["#252525","primary"]}
        // getAriaValueText={valuetext}
      />
    </div>
  );
}
