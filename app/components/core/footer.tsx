import React from "react";
import { Logo } from ".";
import { Copyicon, Twiticon, Faceicon, Instaicon } from "../icons";

function Footer() {
  return (
    <div className="px-4 py-6 ">
      <div className="flex flex-wrap justify-between gap-6">
        <div className="w-full md:w-[30%]">
          <Logo />
        </div>
        <div className="w-full md:w-[60%] flex flex-wrap justify-between gap-6">
          <div className="flex flex-col gap-3 w-full sm:w-[45%] md:w-auto">
            <div className="flex flex-col gap-1">
              <p className="text-[grey] text-lg">Menu</p>
              <div className="text-lg md:text-xl font-medium flex flex-col gap-1">
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  About
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  House
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  For Rent
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Commercial
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[grey] text-lg">Legal</p>
              <div className="text-lg md:text-xl font-medium flex flex-col gap-1">
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Privacy Policy
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Term of use
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-[45%] md:w-auto">
            <div className="flex flex-col gap-1">
              <p className="text-[grey] text-lg">Info</p>
              <div className="text-lg md:text-xl font-medium flex flex-col gap-1">
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Blog
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Buyers Guide
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Sellers Guide
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Price Calculator
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[grey] text-lg">Agents</p>
              <div className="text-lg md:text-xl font-medium flex flex-col gap-1">
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Top agents
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  A-Z
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-[45%] md:w-auto">
            <div className="flex flex-col gap-1">
              <p className="text-[grey] text-lg">Help</p>
              <div className="text-lg md:text-xl font-medium flex flex-col gap-1">
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Support
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Real Estate
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Legal Support
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  Rent and Sale
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[grey] text-lg">Contacts</p>
              <div className="text-lg md:text-xl font-medium flex flex-col gap-1">
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  +91 8447162049
                </p>
                <p className="cursor-pointer transition-all duration-200 hover:pl-2">
                  hk93931212@gamil.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-between items-center mt-[30px] py-4 border-t-[1px] border-[grey]">
        <div className="flex items-center text-[#bdbdbd]">
          <Copyicon h={25} w={25} c="black" />
          <span className="ml-2">2023 Estatify, Inc</span>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0 max-[400px]:gap-1">
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
