import React, { Dispatch, SetStateAction } from "react";

interface IconProps {
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
}

const MenuIcon = ({ isShowing, setIsShowing }: IconProps) => {
  return (
    <div
      className={`absolute top-6 right-6 w-10 h-5 flex flex-col items-center ${
        !isShowing ? "justify-between" : ""
      }`}
      onClick={() => setIsShowing((isShowing) => !isShowing)}
    >
      <div
        className={`w-9 h-0.5 bg-white z-10 rounded-full transition duration-300 ${
          isShowing ? "rotate-45 translate-y-3  translate-x-0.5" : ""
        } `}
      ></div>
      <div
        className={`w-9 h-0.5 bg-white z-10 rounded-full transition duration-300 ${
          isShowing ? "hidden" : ""
        } `}
      ></div>
      <div
        className={`w-9 h-0.5 bg-white z-10 rounded-full transition duration-300 ${
          isShowing ? "-rotate-45 translate-y-2.5" : ""
        } `}
      ></div>
    </div>
  );
};

export default MenuIcon;
