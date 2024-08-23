import { IconProp } from "@/types";
import React from "react";

function DownIcon({ h, w, c }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-5 5.16a2.75 2.75 0 01-4 0L5 9"
      ></path>
    </svg>
  );
}

export default DownIcon;
