import React from "react";

interface SidebarProps {
  setIsSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isDesktop?: boolean;
}

const posts = {
  JavaScript: ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"],
  CSS: ["Post 1", "Post 2", "Post 3", "Post 4"],
  CS: [
    "Post 1",
    "Post 2",
    "Post 3",
    "Post 4",
    "Post 5",
    "Post 6",
    "Post 7",
    "Post 8",
  ],
};

const Sidebar = ({ setIsSidebarOpen, isDesktop }: SidebarProps) => {
  return (
    <div
      className="fixed z-50 w-64 px-5 inset-0 text-primary-100 bg-slate-800 overflow-y-auto scrollbar-thin scrollbar-sm scrollbar-thumb-slate-500 scrollbar-track-slate-800s
    lg:w-60 lg:relative lg:h-screen lg:scrollbar-thin lg:scrollbar-thumb-slate-500
    "
    >
      {Object.entries(posts).map(([category, onePost]) => (
        <div key={category} className="tracking-wide text-sm">
          <h3 className="py-6 tracking-wider font-bold">{category}</h3>
          <div className="border-l-[0.5px] border-slate-500">
            <div className="flex flex-col space-y-4 w-full h-full text-zinc-400 font-light ">
              {onePost.map((post) => (
                <div
                  key={post}
                  className=" font-light -ml-[1px] px-3 w-full hover:border-l-[1px] hover:text-primary-300 border-primary-300"
                >
                  {post}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {!isDesktop && (
        <button
          onClick={() =>
            setIsSidebarOpen &&
            setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)
          }
          className="fixed top-3 left-[216px] text-3xl font-bold text-primary-100"
        >
          <svg
            className="w-6 h-6 fill-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Sidebar;
