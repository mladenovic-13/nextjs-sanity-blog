import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import Sidebar from "./Sidebar";

const BlogNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="flex flex-col text-primary-900 text-xs">
      <Dialog open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <div
          className="fixed inset-0 bg-slate-800/80 backdrop-blur-sm"
          aria-hidden="true"
        />
        <Dialog.Panel>
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </Dialog.Panel>
      </Dialog>
      <div className="mx-3 py-2 flex justify-between text-base border-b-[1px]">
        <div>Logo</div>
        <div className="w-[10%] flex justify-between">
          <div>S</div>
          <div>M</div>
        </div>
      </div>
      <div className="px-3 py-2 flex items-center gap-[3%] border-b-[1px]">
        <div
          onClick={() => setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)}
          className="text-base"
        >
          S
        </div>
        <div>Category</div>
        <div>{">"}</div>
        <div>Post Title</div>
      </div>
    </div>
  );
};

export default BlogNavbar;
