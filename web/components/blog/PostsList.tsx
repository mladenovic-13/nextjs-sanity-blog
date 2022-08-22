import React, { useState } from "react";
import BlogPostCard from "../cards/BlogPostCard";
import { Tab } from "@headlessui/react";
import { postsData } from "../../utils/postsData";

const PostsList = () => {
  let [categories] = useState(postsData);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="list__cards text-primary-900 flex flex-col justify-evenly items-center">
      <h2 className="section__heading text-primary-100 md:py-5">blog posts</h2>
      <Tab.Group>
        <Tab.List className="flex w-full md:w-1/2 space-x-1 rounded-3xl p-1 bg-primary-900">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-3xl py-2.5  md:py-1.5 text-sm font-medium leading-5",

                  selected
                    ? "bg-primary-100 outline-none transition ease-in duration-300  "
                    : "text-primary-100"
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
              className="flex flex-col justify-between h-full md:flex-row md:gap-5 md:py-10"
            >
              {posts.map((post, idx) => (
                <BlogPostCard key={idx} {...post} />
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <p className="view__more text-primary-100">View More &gt;</p>
    </div>
  );
};

export default PostsList;
