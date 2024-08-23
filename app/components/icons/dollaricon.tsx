import { IconProp } from "@/types";
import React from "react";

function DollarIcon({ h, w, c }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g fill={c}>
        <path d="M12 20.75a.76.76 0 01-.75-.75V4a.75.75 0 111.5 0v16a.76.76 0 01-.75.75z"></path>
        <path d="M13.5 18.75H7a.75.75 0 110-1.5h6.5A2.54 2.54 0 0016.25 15a2.54 2.54 0 00-2.75-2.25h-3A4 4 0 016.25 9a4 4 0 014.25-3.75H16a.75.75 0 110 1.5h-5.5A2.54 2.54 0 007.75 9a2.54 2.54 0 002.75 2.25h3A4 4 0 0117.75 15a4 4 0 01-4.25 3.75z"></path>
      </g>
    </svg>
  );
}

export default DollarIcon;
