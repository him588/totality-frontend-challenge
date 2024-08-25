// import React from "react";
// import Image from "next/image";
// import Card from "./card";
// import { Button } from "../../core";

// function SectionTwo() {
//   return (
//     <div className=" flex flex-col gap-3 px-7 py-4">
//       <div className=" flex items-center justify-between">
//         <p className="text-4xl font-semibold">You might be Like</p>
//         <Button
//           size="medium"
//           className=" px-6 border-[2px] bg-transparent border-solid border-black text-black font-semibold"
//         >
//           View all {">"}
//         </Button>
//       </div>
//       <div className=" w-full flex items-center gap-2 h-[75vh]">
//         <div className=" w-1/2 h-full rounded-2xl">
//           <Card />
//         </div>
//         <div className=" w-1/4 h-full  rounded-2xl">
//           <Card />
//         </div>
//         <div className=" w-1/4 h-full  rounded-2xl">
//           <Card />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default SectionTwo;
import React from "react";
import Card from "./card";
import { Button } from "../../core";
import { Properties } from "@/data";

function SectionTwo() {
  return (
    <div className="flex flex-col gap-3 px-4 py-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          You might like
        </p>
        <Button
          size="small"
          className="px-3 py-2 sm:px-4 sm:py-2 border-2 bg-transparent border-solid border-black text-black font-semibold text-sm sm:text-base"
        >
          View all {">"}
        </Button>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-4 h-auto md:h-[75vh]">
        <div className="w-full md:w-1/2 h-full rounded-2xl">
          <Card properties={Properties[3]} />
        </div>
        <div className="w-full md:w-1/4 h-full rounded-2xl">
          <Card properties={Properties[4]} />
        </div>
        <div className="w-full md:w-1/4 h-full rounded-2xl">
          <Card properties={Properties[5]} />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
