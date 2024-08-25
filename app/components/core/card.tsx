"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./button";
import { CartIcon } from "../icons";
import { CurrentUserContext } from "../context";
import { cartProperties, properties, user } from "@/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Card({
  className,
  properties,
}: {
  className?: string;
  properties: properties;
}) {
  const { currentUser, setcurrentUser } = useContext(CurrentUserContext) || {};
  const router = useRouter();
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
    <div
      className={twMerge(
        " min-w-[300px] min-h-[300px] relative rounded-2xl bg-white  shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-2",
        className
      )}
    >
      <div className="h-[400px] w-full rounded-2xl overflow-hidden ">
        <Image
          src={
            "https://images.unsplash.com/photo-1722491945502-abb7235593f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfDF8MHx8fDA%3D"
          }
          alt=""
          height={0}
          width={0}
          unoptimized
          className="h-full w-full"
        />
      </div>
      <div className=" flex items-center  justify-between py-2">
        <p className=" font-semibold text-xl  ">{properties.title}</p>
        <p className=" font-semibold text-xl  ">${properties.price}</p>
      </div>
      <p>{properties.description}</p>
      <div className=" flex gap-2">
        <Button
          onClick={() => router.push(`/payment/${properties.id}`)}
          className=" mt-4 w-full rounded-xl h-[50px] text-lg"
        >
          Book Now
        </Button>
        {/* <Button className=" mt-4 w-1/4 rounded-xl h-[50px] text-lg hover:bg-opacity-85 transition-all duration-200">
          Cart
        </Button> */}
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
