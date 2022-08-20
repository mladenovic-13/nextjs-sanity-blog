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
    <div className="fixed top-0 right-0 w-screen z-50 bg-primary-900 border-b-[1px]">
      <div className="px-4 h-14 flex justify-between items-center">
        <Link href="/">
          <div onClick={() => setIsShowing(false)}>
            <h1 className="tracking-wider text-lg   font-bold">Mladenovic13</h1>
          </div>
        </Link>
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
        <div className="   bg-primary-900 flex flex-col justify-center  items-center ">
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
