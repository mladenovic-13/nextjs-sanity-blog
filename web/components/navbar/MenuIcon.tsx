import React, { Dispatch, SetStateAction } from "react";

interface IconProps {
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
}

const MenuIcon = ({ isShowing, setIsShowing }: IconProps) => {
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
