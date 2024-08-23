import { IconProp } from "@/types";
import React from "react";

function FavouriteIcon({ h, w, c }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill={c}
      data-name="Layer 1"
      viewBox="0 0 52 52"
    >
      <path d="M43.62 52a2 2 0 01-1.09-.33L26 40.83 9.47 51.67a2 2 0 01-2 .09 2 2 0 01-1-1.76V2a2 2 0 012-2h35.15a2 2 0 012 2v48a2 2 0 01-1 1.76 2 2 0 01-1 .24zM26 36.44a2.1 2.1 0 011.1.32l14.52 9.54V4H10.38v42.3l14.52-9.54a2.1 2.1 0 011.1-.32z"></path>
    </svg>
  );
}

export default FavouriteIcon;
