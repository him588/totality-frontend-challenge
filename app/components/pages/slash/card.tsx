import Image from "next/image";

function Card() {
  return (
    <div className=" h-full w-full flex flex-col gap-1">
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
      <p className=" text-3xl font-semibold">$1,78,000</p>
      <div className=" flex gap-4 text-[grey] text-base">
        <p>4 beds</p>
        <p>3 baths</p>
        <p>1,868 sqft</p>
      </div>
      <p className=" flex gap-4 text-[grey] text-base">
        201 Prague Dr,San Jose, CA 95119
      </p>
    </div>
  );
}
export default Card;
