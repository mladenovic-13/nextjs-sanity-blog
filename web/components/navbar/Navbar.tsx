import { Transition } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import SocialLinks from "../social/SocialLinks";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

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

  return (
    <div className="">
      <div
        onClick={() => setIsShowing((isShowing) => !isShowing)}
        className="absolute top-[2%] right-[4%] md:p-3 md:hover:bg-primary-600 rounded-xl z-50"
      >
        <MenuIcon isShowing={isShowing} setIsShowing={setIsShowing} />
      </div>
      <Transition
        show={isShowing}
        enter="transition ease-in-out duration-700 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
      >
        <div className=" w-full h-screen bg-primary-900 flex flex-col justify-center  items-center">
          <div className="tracking-widest h-2/3 py-16 w-5/6 md:max-w-sm flex font-extralight flex-col justify-around text-white text-4xl text-center">
            {navbarItems.map((item: INavbarItem) => (
              <Link key={item.title} href={item.route}>
                <div
                  onClick={() => setIsShowing((isShowing) => !isShowing)}
                  className="p-6 hover:bg-primary-900"
                >
                  {item.title}
                </div>
              </Link>
            ))}
            <SocialLinks {...socialLinks} />
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
