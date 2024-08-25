"use client";
import React, { useContext, useState } from "react";
import Logo from "./logo";
import Button from "./button";
import BasicModal from "./modal";
import SighupForm from "./sighupForm";
import { CurrentUserContext } from "../context";
import LoginForm from "./loginFrom";
import { Sidebar } from ".";

function Header() {
  const [openSighup, setOpenSighup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const currentUser = useContext(CurrentUserContext)?.currentUser;
  return (
    <div className=" px-8 h-[60px] flex items-center justify-between ">
      <BasicModal open={openSighup} setOpen={setOpenSighup}>
        <SighupForm setSighup={setOpenSighup} setLogin={setOpenLogin} />
      </BasicModal>
      <BasicModal open={openLogin} setOpen={setOpenLogin}>
        <LoginForm setSighup={setOpenSighup} setLogin={setOpenLogin} />
      </BasicModal>
      {/* <BasicModal open={openLogin} setOpen={setOpenLogin}>
        Login
      </BasicModal> */}
      <div className=" w-[20%] cursor-pointer">
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
        {currentUser ? (
          <>
            <Sidebar />
          </>
        ) : (
          <>
            <Button onClick={() => setOpenLogin(true)} className=" w-[120px]">
              Login
            </Button>
            <Button onClick={() => setOpenSighup(true)} className=" w-[120px]">
              Sigh up
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
