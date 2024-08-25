"use client";
import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../context";
import { cartProperties } from "@/types";
import { user } from "@/types";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";
import Image from "next/image";
function CartCard({
  className,
  properties,
}: {
  className: string;
  properties: cartProperties;
}) {
  const { currentUser, setcurrentUser } = useContext(CurrentUserContext) || {};
  const usersString = localStorage.getItem("users");
  const [users, setUsers] = useState<user[]>(
    usersString ? JSON.parse(usersString) : []
  );
  function handleAddQuantity() {
    if (!currentUser) return;

    const updatedCart = currentUser.cart.map((item) =>
      item.id === properties.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    const newUser: user = {
      ...currentUser,
      cart: updatedCart,
    };

    setcurrentUser && setcurrentUser(newUser);

    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? newUser : user
    );

    setUsers(updatedUsers);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("Quantity updated for this property", {
      position: "top-center",
    });
  }
  function handleDecreaseQuantity() {
    if (!currentUser) return;

    const updatedCart = currentUser.cart.reduce((acc, item) => {
      if (item.id === properties.id) {
        if (item.quantity > 1) {
          acc.push({ ...item, quantity: item.quantity - 1 });
        }
        // If quantity becomes 0, the item is not added to acc, effectively removing it
      } else {
        acc.push(item);
      }
      return acc;
    }, [] as cartProperties[]);

    const newUser: user = {
      ...currentUser,
      cart: updatedCart,
    };

    setcurrentUser && setcurrentUser(newUser);

    const updatedUsers = users.map((user) =>
      user.email === currentUser.email ? newUser : user
    );

    setUsers(updatedUsers);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success(
      updatedCart.length < currentUser.cart.length
        ? "Item removed from cart"
        : "Quantity updated for this property",
      { position: "top-center" }
    );
  }
  return (
    <div
      className={twMerge(
        " min-w-[300px] max-[600px]:flex-col min-h-[300px] gap-4 relative rounded-2xl bg-white  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex p-2",
        className
      )}
    >
      <div className="h-[350px] w-[30%] max-[600px]:w-full rounded-2xl overflow-hidden ">
        <Image
          src={properties.images[0]}
          alt=""
          height={0}
          width={0}
          unoptimized
          className="h-full w-full rounded-2xl"
        />
      </div>
      <div className=" flex flex-col  py-2 gap-2 max-[600px]:pb-8 ">
        <p className=" font-semibold text-xl  ">
          <span className=" w-[120px] inline-block">Name</span>:{" "}
          {properties.title}
        </p>
        <p className=" font-semibold text-xl  ">
          {" "}
          <span className=" w-[120px] inline-block">Price:</span>: $
          {properties.price}
        </p>
        <p className=" font-semibold text-xl  ">
          <span className=" inline-block w-[120px]">Description</span>:{" "}
          {properties.description}
        </p>
        <p className=" font-semibold text-xl  ">
          <span className=" inline-block w-[120px]">Address</span>:{" "}
          {properties.address.street},{properties.address.city}
        </p>
        <p className=" font-semibold text-xl  ">
          <span className=" inline-block w-[120px]">Location</span>:{" "}
          {properties.address.state},{properties.address.country}
        </p>
      </div>
      <div className=" flex absolute top-2 right-2 ">
        <div
          onClick={handleDecreaseQuantity}
          className=" cursor-pointer h-[50px] w-[50px] bg-red-600 flex items-center justify-center text-red-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-5xl"
        >
          -
        </div>
        <p className="text-green-600 font-semibold h-[50px] w-[50px] flex items-center justify-center text-2xl">
          {properties.quantity}
        </p>
        <div
          onClick={handleAddQuantity}
          className=" cursor-pointer h-[50px] w-[50px] bg-green-600 flex items-center justify-center text-green-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-5xl"
        >
          +
        </div>
      </div>
      <div className=" absolute bottom-2 right-2">
        <p className=" font-semibold text-xl  ">
          Total Price:{" "}
          <span className=" inline-block w-[10  0px]">
            ${properties.quantity * properties.price}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CartCard;
