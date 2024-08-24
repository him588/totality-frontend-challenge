"use client";
import { user } from "@/types";
import React, { ChangeEvent, useState } from "react";
import useAuth from "../hooks/authHook";
import Button from "./button";

function SighupForm() {
  const [formDetail, setFormDetail] = useState<user>({
    name: "",
    email: "",
    password: "",
    cart: [],
  });
  const { sighup } = useAuth(formDetail);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormDetail((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <div onClick={(e) => e.stopPropagation()} className=" flex flex-col">
      <input
        type="text"
        name="name"
        value={formDetail.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={formDetail.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={formDetail.password}
        onChange={handleChange}
      />
      <Button onClick={sighup}>Sighup</Button>
    </div>
  );
}

export default SighupForm;
