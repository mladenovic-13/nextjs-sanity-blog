import Link from "next/link";
import React, { FC } from "react";

interface CategoryProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  currentPage: string;
  posts: Frontmatter[];
}

const SidebarCategory: FC<CategoryProps> = ({
  title,
  currentPage,
  isOpen,
  posts,
  setIsOpen,
  setIsSidebarOpen,
}) => {
  return (
    <div className="tracking-wide text-sm cursor-pointer ">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex gap-1 items-center"
      >
        <svg
          className={`${
            isOpen ? "" : "-rotate-90"
          }  fill-slate-600/80 -ml-2 transition duration-200`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414" />
        </svg>

        <span className="py-3 tracking-wider font-bold">{title}</span>
      </div>
      {isOpen && (
        <div className="transition ease-in-out duration-1000 border-l-[1px] border-slate-400/10">
          <div className="flex flex-col lg:text-xs space-y-4 w-full h-full text-slate-500 font-light lg:font-medium">
            {posts.map((post) => (
              <div
                onClick={() =>
                  setIsSidebarOpen &&
                  setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)
                }
                key={post.title}
                className={`${
                  currentPage === post.slug &&
                  "border-l-2 text-primary-300 font-semibold"
                } -ml-[1.5px] px-3 w-full hover:border-l-[1px] hover:text-primary-300 border-primary-300 cursor-pointer`}
              >
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarCategory;
