"use client";
import { user } from "@/types";
import React, { ChangeEvent, useState, useContext } from "react";
import { CurrentUserContext } from "../context";
import Button from "./button";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

type prop = {
  setSighup: React.Dispatch<React.SetStateAction<boolean>>;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

function SighupForm({ setSighup, setLogin }: prop) {
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
  function handleUserAdd() {
    if (formDetail.name.length < 3) {
      toast.error("name is not less than 3", {
        position: "top-center",
      });
      return;
    }
    if (!emailRegex.test(formDetail.email)) {
      toast.error("Email contains @", { position: "top-center" });
      return;
    }
    if (formDetail.password.length < 6) {
      toast.error("password atleast 6 char", { position: "top-center" });
      return;
    }
    const isUserExists = users.filter(
      (user) => user.email === formDetail.email
    );
    if (isUserExists.length === 0) {
      const allNewUsers = [...users, formDetail];
      localStorage.setItem("users", JSON.stringify(allNewUsers));
      localStorage.setItem("currentUser", JSON.stringify(formDetail));
      setUsers(allNewUsers);
      setCurrentUser && setCurrentUser(formDetail);
      toast.success("User registered Successfully", {
        position: "top-center",
      });
      setSighup(false);
    } else {
      toast.error("Email already exists", { position: "top-center" });
    }
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormDetail((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" flex flex-col  w-[40%] min-w-[300px] bg-white rounded-2xl p-3"
    >
      <div className=" flex flex-col items-center gap-3 text-black">
        <p className=" text-center font-semibold text-3xl">Sigh up</p>
        <div className=" w-full">
          <p className=" text-xl">Name</p>
          <input
            type="text"
            name="name"
            placeholder="Ex-Himanshu"
            className=" rounded-lg text-black border-[2px] border-solid border-gray-400 w-full h-[50px] px-2 text-lg outline-slate-500"
            value={formDetail.name}
            onChange={handleChange}
          />
        </div>
        <div className=" w-full text-black">
          <p className=" text-xl">Email</p>
          <input
            type="text"
            name="email"
            placeholder="Ex-hk93931212@gmail.com"
            className=" rounded-lg text-black  border-[2px] border-solid border-gray-400 w-full h-[50px] px-2 text-lg"
            value={formDetail.email}
            onChange={handleChange}
          />
        </div>
        <div className="w-full text-black ">
          <p className=" text-xl">Password</p>
          <input
            type="text"
            name="password"
            placeholder="Ex-12password"
            className=" rounded-lg text-black border-[2px] border-solid border-gray-400 w-full h-[50px] px-2 text-lg"
            value={formDetail.password}
            onChange={handleChange}
          />
        </div>
        <Button
          className=" h-[50px]  w-full rounded-lg"
          onClick={handleUserAdd}
        >
          Sighup
        </Button>
      </div>
      <div className=" h-[1.4px] w-full bg-slate-500 mt-3 rounded-xl opacity-40"></div>
      <p className=" text-center mt-3 text-black">
        Already have account ?
        <span
          onClick={() => {
            setSighup(false), setLogin(true);
          }}
          className=" text-black font-semibold cursor-pointer"
        >
          {" "}
          Login
        </span>
      </p>
    </div>
  );
}

export default SighupForm;
