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
    <div className="relative px-4 md:px-8 h-[60px] flex items-center justify-between">
      <BasicModal open={openSighup} setOpen={setOpenSighup}>
        <SighupForm setSighup={setOpenSighup} setLogin={setOpenLogin} />
      </BasicModal>
      <BasicModal open={openLogin} setOpen={setOpenLogin}>
        <LoginForm setSighup={setOpenSighup} setLogin={setOpenLogin} />
      </BasicModal>

      <div className="w-[50%] md:w-[20%] cursor-pointer absolute">
        <Logo />
      </div>

      <div className="w-[50%] md:w-[20%] flex items-end justify-end gap-2">
        {currentUser ? (
          <Sidebar />
        ) : (
          <>
            <Button
              onClick={() => setOpenLogin(true)}
              className="w-[100px] text-[14px] md:w-[100px]"
            >
              Login
            </Button>
            <Button
              onClick={() => setOpenSighup(true)}
              className="w-[100px] text-sm md:w-[100px]"
            >
              Sign up
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
