import React from "react";

const ScrollDown = () => {
  return (
    <>
      <div className="absolute bottom-[15%] -left-8 md:left-0 rotate-90 ">
        {" "}
        <div className="animate-pulse tracking-widest">scroll down &gt;</div>
      </div>
      <div className="absolute bottom-[15%] -right-10 md:right-0 rotate-90 ">
        {" "}
        <div className="animate-pulse tracking-widest">scroll down &gt;</div>
      </div>
    </>
  );
};

export default ScrollDown;
