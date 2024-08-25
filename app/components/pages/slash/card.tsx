"use client";
import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../context";
import Image from "next/image";
import { Properties } from "@/data";
import { properties, user } from "@/types";
import { CartIcon } from "../../icons";
import { toast } from "react-toastify";
import { cartProperties } from "@/types";
function Card({
  className,
  properties,
}: {
  className?: string;
  properties: properties;
}) {
  const { currentUser, setcurrentUser } = useContext(CurrentUserContext) || {};

  const usersString = localStorage.getItem("users");
  const [users, setUsers] = useState<user[]>(
    usersString ? JSON.parse(usersString) : []
  );

  function handleCart() {
    const allUserExecptCurrent = users.filter(
      (user) => user.email !== currentUser?.email
    );
    const isPropertyExistsInCart = currentUser?.cart.find(
      (propertie) => propertie.id === properties.id
    );
    if (!currentUser) {
      toast.info("Login first to access cart", { position: "top-center" });
      return;
    }

    if (!isPropertyExistsInCart) {
      const newProperty: cartProperties = { ...properties, quantity: 1 };
      const newUser: user = {
        ...currentUser!,
        name: currentUser!.name,
        email: currentUser!.email,
        password: currentUser!.password,
        cart: [...currentUser!.cart, newProperty],
      };
      setcurrentUser && setcurrentUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      setUsers([...allUserExecptCurrent, newUser]);
      localStorage.setItem(
        "users",
        JSON.stringify([...allUserExecptCurrent, newUser])
      );
      toast.success("Property added Successfully to cart", {
        position: "top-center",
      });
    } else {
      toast.info("Property already exists in cart", { position: "top-center" });
    }
    console.log(currentUser);
    console.log(isPropertyExistsInCart);
  }
  return (
    <div className="relative h-full w-full cursor-pointer flex flex-col gap-1 p-2 hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-xl">
      <Image
        src={properties.images[0]}
        alt=""
        unoptimized
        height={0}
        width={0}
        className=" h-[80%] w-full rounded-2xl"
      />
      <div className=" py-2 px-4">
        <p className=" text-3xl font-semibold">$1,78,000</p>
        <div className=" flex gap-4 text-[grey] text-base">
          <p>{properties && properties.bedroom} beds</p>
          <p>3 baths</p>
          <p>{properties && properties.area} sqft</p>
        </div>
        <p className=" flex gap-4 text-[grey] text-base">
          {properties && properties.address.street},
          {properties && properties.address.city},{" "}
          {properties && properties.address.state}{" "}
          {properties && properties.address.country}
        </p>
      </div>
      <div
        onClick={handleCart}
        className=" absolute top-0 right-0 h-[50px] w-[50px] rounded-lg bg-gray-500 cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex items-center justify-center"
      >
        <CartIcon h={40} w={40} c="#3b3b3b" />
      </div>
    </div>
  );
}
export default Card;
