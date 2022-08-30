import Image from "next/image";
import React from "react";
import maskImg from "../../../public/images/bg-img-small.png";

interface MaskProps {
  rotate?: boolean;
  isBlog?: boolean;
}

const MainMask = ({ rotate, isBlog }: MaskProps) => {
  return (
    <div className="absolute z-10 top-0 inset-x-0 flex justify-end overflow-hidden pointer-events-none">
      <div
        className={`relative h-screen ${isBlog ? "w-[60rem]" : "w-full"} ${
          rotate && "rotate-180"
        }`}
      >
        <Image src={maskImg} objectFit="cover" layout="fill" alt="" />
      </div>
    </div>
  );
};

export default MainMask;
