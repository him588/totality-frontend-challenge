"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import { Header, Footer, CartCard, Button } from "../components/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();

  return (
    <div className=" min-h-screen w-full bg-white">
      <ToastContainer />
      <div className=" w-full bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9] flex flex-col gap-3 pb-4">
        <Header />
        {/* <div className=" px-7 h-[120px]">
          <SearchBar />
        </div> */}
      </div>
      <div className=" h-auto min-h-[50vh] px-7 py-2 flex flex-col items-center gap-3  ">
        <p className=" text-4xl font-bold">Booking Successfull !</p>
        <Image
          src={
            "https://img.freepik.com/free-vector/thank-you-card-concept-illustration_114360-27845.jpg?uid=R86992373&ga=GA1.1.1317662829.1724499322&semt=ais_hybrid"
          }
          alt=""
          height={500}
          width={500}
          unoptimized
        />
        <Button onClick={() => router.push("/")} className=" rounded-lg">
          Explore More
        </Button>
      </div>

      <div className=" px-7 py-4 bg-gradient-to-br from-[#fcf3ea] to-[#d8ebf9]">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
