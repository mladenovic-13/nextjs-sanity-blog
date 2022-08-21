import React from "react";

const ScrollCounter = ({ sections }: ScrollCounerProps) => {
  return (
    <div className="flex flex-col justify-evenly items-center absolute top-1/3 right-[4%] h-1/4">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`w-2 md:w-3 h-2 md:h-3 rounded-full bg-primary-100 ${
            section.isOnScreen ? "scale-[1.6]" : ""
          }`}
          onClick={() =>
            section.ref.current.scrollIntoView({ behavior: "smooth" })
          }
        ></div>
      ))}
    </div>
  );
};

export default ScrollCounter;
