import { Transition } from "@headlessui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <div
        className="absolute top-4 right-6"
        onClick={() => setIsShowing((isShowing) => !isShowing)}
      >
        {isShowing ? (
          <FontAwesomeIcon
            icon={faXmark}
            style={{ color: "whitesmoke", fontSize: 40 }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "black", fontSize: 32 }}
          />
        )}
      </div>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="h-screen bg-gradient-to-bl from-primary-600  to-primary-900 flex flex-col justify-center  items-center">
          <div className="tracking-widest h-2/3 py-12 w-5/6 flex font-extralight flex-col justify-around text-white text-4xl text-center">
            <div className="p-6 hover:bg-primary-900 border-b-2">Home</div>
            <div className="p-6 hover:bg-primary-900 border-b-2">About Me</div>
            <div className="p-6 hover:bg-primary-900 border-b-2">Projects</div>
            <div className="p-6 hover:bg-primary-900 border-b-2">
              Contact Me
            </div>
            <div className="p-6 hover:bg-primary-900 border-b-2">Blog</div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
