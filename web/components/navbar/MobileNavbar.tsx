import Link from "next/link";
import React, { FC, useState } from "react";
import Menu from "./Menu";

interface IMobileNavbar {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: FC<IMobileNavbar> = ({ setIsSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="z-10 sticky top-0 bg-slate-900/60 backdrop-blur lg:hidden">
      <div className="mx-3 py-2 flex justify-between text-base border-b-[1px] border-slate-700/90">
        <Link href="/">
          <div className="font-extrabold">Mladenovic13</div>
        </Link>
        <div className="w-[14%] flex justify-between">
          <div className="center">
            <svg
              className="fill-white w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
          </div>
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="center cursor-pointer"
          >
            <svg
              className="fill-white w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            >
              <path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 flex items-center gap-[3%] border-b-[1px] border-slate-700/90">
        <div
          onClick={() => setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)}
          className="text-base"
        >
          <svg
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="26px"
            height="26px"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
        </div>
        <div>Category</div>
        <div>{">"}</div>
        <div>Post Title</div>
      </div>
      <Menu isShowing={isMenuOpen} setIsShowing={setIsMenuOpen} />
    </div>
  );
};

export default MobileNavbar;
