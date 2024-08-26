"use client";
import { user } from "@/types";
import React, { ChangeEvent, useState, useContext } from "react";
import { CurrentUserContext } from "../context";
import Button from "./button";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

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
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const usersString = localStorage.getItem("users");
  const setCurrentUser = useContext(CurrentUserContext)?.setcurrentUser;
  const [users, setUsers] = useState<user[]>(
    usersString ? JSON.parse(usersString) : []
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormDetail((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  function handleLogin() {
    if (!emailRegex.test(formDetail.email)) {
      toast.error("Email contains @", { position: "top-center" });
      return;
    }
    if (formDetail.password.length < 6) {
      toast.error("password atleast 6 char", { position: "top-center" });
      return;
    }
    const isUserExists = users.filter(
      (user) =>
        user.email === formDetail.email && user.password === formDetail.password
    );
    if (isUserExists.length === 0) {
      toast.error("Email or Password is incorrect", { position: "top-center" });
      return;
    } else {
      setCurrentUser && setCurrentUser(isUserExists[0]);
      localStorage.setItem("currentUser", JSON.stringify(isUserExists[0]));
      toast.success("login successfull", { position: "top-center" });
      setLogin(false);
    }
  }
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" flex flex-col h-auto max-w-md bg-white rounded-2xl p-4 mx-4 sm:mx-auto w-[40%] min-w-[300px]"
    >
      <div className=" flex flex-col items-center gap-3">
        <p className=" text-center font-semibold text-3xl">Login</p>

        <div className=" w-full">
          <p className=" text-xl text-black">Email</p>
          <input
            type="text"
            name="email"
            placeholder="Ex-hk93931212@gmail.com"
            className=" rounded-lg border-[2px] text-black border-solid border-gray-400 w-full h-[50px] px-2 text-lg"
            value={formDetail.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full text-black">
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
      <p className=" text-center text-black mt-3">
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
