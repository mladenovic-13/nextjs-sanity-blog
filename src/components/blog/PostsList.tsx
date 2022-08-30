import React, { useState } from "react";
import BlogPostCard from "../cards/BlogPostCard";
import { Tab } from "@headlessui/react";
import { postsData } from "../../utils/data";
import Link from "next/link";

const PostsList = () => {
  let [categories] = useState(postsData);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="list__cards  flex flex-col justify-evenly items-center">
      <h2 className="section__heading text-primary-100">blog posts</h2>
      <Tab.Group>
        <Tab.List className="flex w-full md:w-1/2 space-x-1 rounded-3xl p-1 bg-slate-400/5">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-3xl py-2.5  md:py-1.5 text-sm font-medium leading-5",

                  selected
                    ? "bg-slate-900/70 font-extrabold outline-none transition ease-in duration-300  "
                    : ""
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-full h-[70%]">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className="flex flex-col justify-evenly h-full md:flex-row md:gap-5 md:py-10"
            >
              {posts.map((post, idx) => (
                <BlogPostCard key={idx} {...post} />
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <Link href="/blog">
        <p className="view__more">View More &gt;</p>
      </Link>
    </div>
  );
};

export default PostsList;
