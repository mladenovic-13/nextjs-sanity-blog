import { Dialog } from "@headlessui/react";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction } from "react";
import SocialLinks from "../social/SocialLinks";

interface IMenu {
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
}

interface INavbarItem {
  title: string;
  route: string;
}
const navbarItems = [
  { title: "Home", route: "/" },
  { title: "About Me", route: "/about" },
  { title: "Projects", route: "/projects" },
  { title: "Contact Me", route: "/contact" },
  { title: "Blog", route: "/blog" },
];

const socialLinks = {
  instagram: "/",
  github: "/",
  linkedin: "/",
  email: "/",
};

const Menu: FC<IMenu> = ({ isShowing, setIsShowing }) => {
  return (
    <Dialog open={isShowing} onClose={() => setIsShowing(false)}>
      <div
        className="fixed inset-0 bg-slate-800/80 backdrop-blur z-40"
        aria-hidden="true"
      />
      <Dialog.Panel>
        <div className="z-50 fixed top-[1.5%] right-[3%] w-2/3 lg:w-1/4 xl:w-1/5 py-3 flex flex-col items-start  bg-slate-900/70 rounded-md">
          <div
            onClick={() => setIsShowing((prev) => !prev)}
            className="absolute right-[3%] top-[3%]"
          >
            <svg
              className="fill-slate-100 w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="w-full px-6 tracking-wider flex flex-col justify-around text-xl ">
            {navbarItems.map((item: INavbarItem) => (
              <div key={item.title} className="py-1">
                <div>
                  <div
                    className="max-w-fit"
                    onClick={() => setIsShowing((isShowing) => !isShowing)}
                  >
                    <Link
                      className="focus:outline-none focus:shadow-none"
                      href={item.route}
                    >
                      {item.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <SocialLinks {...socialLinks} />
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Menu;
