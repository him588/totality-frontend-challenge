"use client";
import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "./button";
import { CurrentUserContext } from "../context";
import { CartIcon, HomeIcon, Menu } from "../icons";
import LogoutIcon from "./logouticon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export default function TemporaryDrawer() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { currentUser, setcurrentUser } =
    React.useContext(CurrentUserContext) || {};
  function handleLogout() {
    localStorage.removeItem("currentUser");
    setcurrentUser && setcurrentUser(null);
    router.push("/");
    toast.success("Logout Successfully", { position: "top-center" });
  }
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 300, padding: "10px", height: "100%", position: "relative" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className=" h-[100px]  w-full  rounded-2xl overflow-hidden hover:bg-gray-400 hover:bg-opacity-20 flex items-center gap-2 cursor-pointer">
        <div className="h-[70px] w-[70px] rounded-xl bg-[#3b3b3b] flex items-center justify-center text-white font-semibold text-4xl ">
          <p>{currentUser && currentUser.name.split("")[0].toUpperCase()}</p>
        </div>
        <div>
          <p className=" text-[#3b3b3b] font-semibold text-lg uppercase">
            {currentUser && currentUser.name}
          </p>
          <p>{currentUser && currentUser.email}</p>
        </div>
      </div>
      <div className=" mt-4">
        {" "}
        <Link href={"/"}>
          <div className=" cursor-pointer h-[50px] w-full hover:bg-gray-400 hover:bg-opacity-20 flex items-center px-3 text-xl font-bold rounded-lg gap-2">
            <HomeIcon h={25} w={25} c="#3b3b3b" />
            Home
          </div>
        </Link>
        <Link href={"/cart"}>
          <div className=" cursor-pointer h-[50px] w-full hover:bg-gray-400 hover:bg-opacity-20 flex items-center px-3 text-xl font-bold rounded-lg gap-2">
            <CartIcon h={30} w={30} c="#3b3b3b" />
            Cart
          </div>
        </Link>
      </div>
      <div
        onClick={handleLogout}
        className=" absolute bottom-2 left-2 cursor-pointer h-[50px] w-[90%] hover:bg-gray-400 hover:bg-opacity-20 flex items-center px-3 text-xl font-bold rounded-lg gap-2"
      >
        <LogoutIcon h={25} w={25} c="#3b3b3b" />
        Logout
      </div>
    </Box>
  );

  return (
    <div>
      <Button
        className=" h-[60px] w-[60px] mt-2 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-5 flex items-center justify-center "
        onClick={toggleDrawer(true)}
      >
        <Menu h={40} w={40} c="black" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
