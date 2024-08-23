import React from "react";
// import { ProtectedHeader } from "../components/core";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full bg-[#f9f9ff] overflow-hidden">
      {/* <ProtectedHeader /> */}
      {/* <div className="p-[30px] w-full grid grid-cols-4 place-items-center gap-[20px] bg-[#f9f9ff] max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:p-[20px] max-[400px]:grid-cols-1 max-[400px]:mt-[90px]">
        {data.map((item, index) => {
          return <Card details={item} key={index}></Card>;
        })}
      </div> */}
      <div className=" min-h-screen">{children}</div>
    </div>
  );
}

export default Layout;
