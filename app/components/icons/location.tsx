import { IconProp } from "@/types";
import React from "react";

function LocationIcon({ h, w, c }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8z"></path>
        <path d="M12 12a2 2 0 100-4 2 2 0 000 4z"></path>
      </g>
    </svg>
  );
}

export default LocationIcon;
