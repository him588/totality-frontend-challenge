"use client";
import React, { useContext } from "react";
import { CurrentUserContext } from "../components/context";
import { ToastContainer } from "react-toastify";
import { Header, Footer, CartCard, Button } from "../components/core";
import Image from "next/image";
function Page() {
  const { currentUser } = useContext(CurrentUserContext) || {};

  return (
    <div className=" min-h-screen w-full bg-white">
      <ToastContainer />
      <div className=" w-full bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9] flex flex-col gap-3 pb-4">
        <Header />
        {/* <div className=" px-7 h-[120px]">
          <SearchBar />
        </div> */}
      </div>
      <div className=" h-auto min-h-[50vh] px-7 py-2 flex flex-wrap gap-3  ">
        {currentUser?.cart.length === 0 ? (
          <div className=" w-full flex flex-col items-center justify-center py-10">
            <p className=" text-4xl font-bold">
              Sorry, No property available in cart
            </p>
            <Image
              src={
                "https://img.freepik.com/free-vector/memory-storage-concept-illustration_114360-3888.jpg?uid=R86992373&ga=GA1.1.1317662829.1724499322&semt=ais_hybrid"
              }
              alt=""
              height={500}
              width={500}
              unoptimized
            />
          </div>
        ) : (
          <>
            {currentUser?.cart.map((item, key) => (
              <CartCard key={key} className="w-full" properties={item} />
            ))}
            <div className=" w-full flex items-center justify-center py-4">
              <Button className=" w-[30%] h-[50px] min-w-[200px] rounded-lg">
                Purchase All
              </Button>
            </div>
          </>
        )}
      </div>

      <div className=" px-7 py-4 bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9]">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
