import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MenuIcon from "./MenuIcon";

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
  return (
    <div className="">
      <div className="absolute top-3 right-3">
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
        <div className="w-full h-screen bg-primary-900 flex flex-col justify-center  items-center z-50">
          <div className="tracking-widest h-2/3 py-16 w-5/6 flex font-extralight flex-col justify-around text-white text-4xl text-center">
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
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
