import React from "react";

const ScrollDown = () => {
  return (
    <>
      <div className="absolute bottom-[15%] -left-6 rotate-90 ">
        {" "}
        <div className="animate-pulse">scroll down -&gt;</div>
      </div>
      <div className="absolute bottom-[15%] -right-8 rotate-90 ">
        {" "}
        <div className="animate-pulse">scroll down -&gt;</div>
      </div>
    </>
  );
};

export default ScrollDown;
