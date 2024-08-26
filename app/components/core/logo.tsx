import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <p className=" text-3xl font-semibold  text-black">Estatify</p>
      </Link>
    </div>
  );
}

export default Logo;
