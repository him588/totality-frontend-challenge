import React from "react";
import { Logo } from "../../core";
import { Copyicon, Twiticon, Faceicon, Instaicon } from "../../icons";

function Footer() {
  return (
    <div>
      <div className=" flex justify-between">
        <div className=" w-[30%]">
          <Logo />
        </div>
        <div className=" w-[60%] flex justify-between">
          <div className=" flex flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <p className=" text-[grey] text-lg">Menu</p>
              <div className=" text-xl font-medium flex flex-col gap-1">
                <p className=" cursor-pointer">About</p>
                <p className=" cursor-pointer">House</p>
                <p className=" cursor-pointer">For Rent</p>
                <p className=" cursor-pointer">Commercial</p>
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <p className=" text-[grey] text-lg">Legal</p>
              <div className=" text-xl font-medium flex flex-col gap-1">
                <p className=" cursor-pointer">Privacy Policy</p>
                <p className=" cursor-pointer">Term of use</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <p className=" text-[grey] text-lg">Info</p>
              <div className=" text-xl font-medium flex flex-col gap-1">
                <p className=" cursor-pointer">Blog</p>
                <p className=" cursor-pointer">Buyers Guide</p>
                <p className=" cursor-pointer">Sellers Guide</p>
                <p className=" cursor-pointer">Price Calculator</p>
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <p className=" text-[grey] text-lg">Agents</p>
              <div className=" text-xl font-medium flex flex-col gap-1">
                <p className=" cursor-pointer">Top agents</p>
                <p className=" cursor-pointer">A-Z</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <div className=" flex flex-col gap-1">
              <p className=" text-[grey] text-lg">Help</p>
              <div className=" text-xl font-medium flex flex-col gap-1">
                <p className=" cursor-pointer">Support</p>
                <p className=" cursor-pointer">Real Estate</p>
                <p className=" cursor-pointer">Legal Support</p>
                <p className=" cursor-pointer">Rent and Sale</p>
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <p className=" text-[grey] text-lg">Contacts</p>
              <div className=" text-xl font-medium flex flex-col gap-1">
                <p className=" cursor-pointer">+91 8447162049</p>
                <p className=" cursor-pointer">hk93931212@gamil.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between mt-[30px] py-4">
        <div className="flex items-center text-[#bdbdbd]">
          <Copyicon h={25} w={25} c="black" />
          2023 Hostela, Inc
        </div>
        <div className="flex gap-3 max-[400px]:gap-1">
          <Faceicon h={30} w={30} c="black" />
          <Twiticon h={30} w={30} c="black" />
          <div className="mt-[-3.5px] ml-[-5px]">
            <Instaicon h={38} w={38} c="black" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
