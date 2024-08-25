import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <p className=" text-4xl font-semibold ">Estatify</p>
      </Link>
    </div>
  );
}

export default Logo;
