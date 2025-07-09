"use client";

import Featured from "./featured";
import ExploreMore from "./exploreMore";

import { Post } from "@/interfaces/post";
import Part3 from "./part3";

const Articles: React.FC<{ initialPosts: Post[] }> = ({ initialPosts }) => {
  // Filter featured posts
  const featuredPosts = initialPosts.filter(
    (post) =>
      // post.tags.toLowerCase().includes("learn") ||
      post.tags?.toLowerCase().includes("0") ||
      post.tags?.toLowerCase().includes("1")
  );

  // Filter non-featured posts
  const nonFeaturedPosts = initialPosts.filter(
    (post) =>
      !post.tags?.toLowerCase().includes("learn") &&
      !post.tags?.toLowerCase().includes("featured")
  );

  return (
    <>
      <div className="flex justify-center items-center  z-10 w-full ">
        <div className=" px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-6 rounded-md mb-4 max-w-[1128px] w-full border xs:border-none xs:px-4 border-primaryColor text-neutralColor shadow-md backdrop-blur-md ">
          <div className="flex flex-col justify-center sm:items-center xs:items-center w-full ">
            <Featured featuredPosts={[...featuredPosts].reverse()} /> 
            <ExploreMore posts={nonFeaturedPosts} />
            <Part3 posts={nonFeaturedPosts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
