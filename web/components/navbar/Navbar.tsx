import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  // const navbarItems = ["Home", "About Me", "Projects", "Contact Me", "Blog"];
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
    <div className="absolute top-0 right-0 w-screen z-50 bg-primary-900">
      <div className="px-4 h-16 flex justify-between items-center">
        <Link href="/">
          <div onClick={() => setIsShowing(false)}>
            <p className="text-xs text-primary-300 italic">{"<img>"}</p>
            <h1 className="tracking-wider text-xl pl-4 text-primary-100 font-medium">
              Mladenovic13
            </h1>
            <p className="text-xs text-primary-300 italic">{"</img>"}</p>
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
        <div className="h-[calc(100vh-4rem)] text-primary-100  bg-primary-900 flex flex-col justify-center  items-center">
          <div className="tracking-widest h-2/3 py-12 w-5/6 flex font-extralight flex-col justify-around text-white text-4xl text-center">
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
