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
        src={
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
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
// import Image from "next/image";

// function Card() {
//   return (
//     <div className="h-full w-full flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
//       <div className="relative h-[80%] w-full rounded-2xl overflow-hidden">
//         <Image
//           src={
//             "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           }
//           alt="Property Image"
//           unoptimized
//           layout="fill"
//           objectFit="cover"
//           className="rounded-2xl h-full w-full"
//         />
//       </div>
//       <div className="flex flex-col gap-1 px-2 py-3">
//         <p className="text-2xl font-semibold text-gray-800">$1,78,000</p>
//         <div className="flex gap-4 text-gray-600 text-base">
//           <p>4 beds</p>
//           <p>3 baths</p>
//           <p>1,868 sqft</p>
//         </div>
//         <p className="text-gray-500 text-sm">
//           201 Prague Dr, San Jose, CA 95119
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Card;
// import Image from "next/image";

// function Card() {
//   return (
//     <div className="h-full w-full flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
//       <div className="relative h-[200px] sm:h-[250px] w-full rounded-2xl overflow-hidden">
//         <Image
//           src={
//             "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           }
//           alt="Property Image"
//           unoptimized
//           width={0}
//           height={200}
//           className="rounded-2xl w-full h-full"
//         />
//       </div>
//       <div className="flex flex-col gap-1 px-2 py-3">
//         <p className="text-2xl font-semibold text-gray-800">$1,78,000</p>
//         <div className="flex gap-4 text-gray-600 text-base">
//           <p>4 beds</p>
//           <p>3 baths</p>
//           <p>1,868 sqft</p>
//         </div>
//         <p className="text-gray-500 text-sm">
//           201 Prague Dr, San Jose, CA 95119
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Card;
