import { useState } from "react";
import MenuIcon from "./MenuIcon";
import Menu from "./Menu";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsShowing((isShowing) => !isShowing)}
        className={`${
          isShowing && "hidden"
        } absolute top-0 right-2 md:p-3 z-10`}
      >
        <div className="">
          <svg
            width="60px"
            height="60px"
            viewBox="0 0 72 72"
            id="emoji"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="color" />
            <g id="hair" />
            <g id="skin" />
            <g id="skin-shadow" />
            <g id="line">
              <line
                x1="16"
                x2="56"
                y1="26"
                y2="26"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="16"
                x2="56"
                y1="36"
                y2="36"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="16"
                x2="56"
                y1="46"
                y2="46"
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
      </div>
      <Menu isShowing={isShowing} setIsShowing={setIsShowing} />
    </div>
  );
};

export default Navbar;
