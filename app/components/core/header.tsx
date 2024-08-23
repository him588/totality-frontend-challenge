import React from "react";
import Logo from "./logo";
import Button from "./button";

function Header() {
  return (
    <div className=" px-8 h-[60px] flex items-center justify-between ">
      <div className=" w-[20%]">
        <Logo />
      </div>
      <div className=" flex items-center justify-center w-[60%] gap-7 font-medium text-lg">
        <p className=" cursor-pointer hover:text-[19px] min-w-[120px] transition-all duration-150">
          Houses
        </p>
        <p className=" cursor-pointer hover:text-[19px] min-w-[120px] transition-all duration-150">
          Rentals
        </p>
        <p className=" cursor-pointer hover:text-[19px] min-w-[120px] transition-all duration-150">
          Commercial
        </p>
        <p className=" cursor-pointer hover:text-[19px] min-w-[120px] transition-all duration-150">
          Contact
        </p>
      </div>
      <div className="w-[20%] flex items-end justify-end gap-2">
        <Button className=" w-[120px]">Login</Button>
        <Button className=" w-[120px]">Sigh up</Button>
      </div>
    </div>
  );
}

export default Header;
