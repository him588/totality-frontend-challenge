import { IconProp } from "@/types";
import React from "react";

function ApartmentIcon({ h, w, c }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill={c}
      viewBox="0 0 24 24"
    >
      <path d="M22 1H10a1 1 0 00-1 1v5H2a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V2a1 1 0 00-1-1zM3 9h6v12H3zm18 12H11V3h10zM19 7h-6V5h6zm0 4h-6V9h6zm0 4h-6v-2h6zm0 4h-6v-2h6zM5 10h2v2H5zm0 4h2v2H5zm0 4h2v2H5z"></path>
    </svg>
  );
}

export default ApartmentIcon;
