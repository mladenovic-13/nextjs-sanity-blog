import React, { Dispatch, SetStateAction } from "react";

const MenuIcon = () => {
  return (
    <div
      className={`w-10 h-5 md:h-6 flex flex-col items-center justify-between `}
    >
      <div className={`w-9 md:w-10 h-0.5 md:h-1 bg-white rounded-full`}></div>
      <div className={`w-9 md:w-10 h-0.5 md:h-1 bg-white rounded-full`}></div>
      <div className={`w-9 md:w-10 h-0.5 md:h-1 bg-white rounded-full`}></div>
    </div>
  );
};

export default MenuIcon;
