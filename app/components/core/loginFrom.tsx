"use client";
import { user } from "@/types";
import React, { ChangeEvent, useState } from "react";
import useAuth from "../hooks/authHook";
import Button from "./button";
import "react-toastify/dist/ReactToastify.css";
type prop = {
  setSighup: React.Dispatch<React.SetStateAction<boolean>>;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginForm({ setSighup, setLogin }: prop) {
  const [formDetail, setFormDetail] = useState<user>({
    name: "",
    email: "",
    password: "",
    cart: [],
  });
  const { login } = useAuth(formDetail);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormDetail((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  function handleLogin() {
    login();
    setLogin(false);
  }
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" flex flex-col  h-[400px] w-[450px] bg-white rounded-2xl p-3"
    >
      <div className=" flex flex-col items-center gap-3">
        <p className=" text-center font-semibold text-3xl">Sigh up</p>
        {/* <div className=" w-full">
          <p className=" text-xl">Name</p>
          <input
            type="text"
            name="name"
            placeholder="Ex-Himanshu"
            className=" rounded-lg border-[2px] border-solid border-gray-400 w-full h-[50px] px-2 text-lg outline-slate-500"
            value={formDetail.name}
            onChange={handleChange}
          />
        </div> */}
        <div className=" w-full">
          <p className=" text-xl">Email</p>
          <input
            type="text"
            name="email"
            placeholder="Ex-hk93931212@gmail.com"
            className=" rounded-lg border-[2px] border-solid border-gray-400 w-full h-[50px] px-2 text-lg"
            value={formDetail.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full">
          <p className=" text-xl">Password</p>
          <input
            type="text"
            name="password"
            placeholder="Ex-12password"
            className=" rounded-lg border-[2px] border-solid border-gray-400 w-full h-[50px] px-2 text-lg"
            value={formDetail.password}
            onChange={handleChange}
          />
        </div>
        <Button className=" h-[50px] w-full rounded-lg" onClick={handleLogin}>
          Sighup
        </Button>
      </div>
      <div className=" h-[1.4px] w-full bg-slate-500 mt-3 rounded-xl opacity-40"></div>
      <p className=" text-center mt-3">
        Dont have any account ?
        <span
          onClick={() => {
            setSighup(true), setLogin(false);
          }}
          className=" text-black font-semibold cursor-pointer"
        >
          {" "}
          Sighup
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
