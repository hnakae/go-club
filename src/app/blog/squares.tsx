import React from "react";
import Quote from "../_components/quote";
import Image from "next/image";
import { HeroPost } from "../_components/hero-post";
import { getAllPosts } from "@/lib/api";
import { GameReviews } from "../_components/game-reviews";
import { PostPreview } from "../_components/post-preview";
const Squares = () => {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  // console.log(heroPost);

  const morePosts = allPosts.slice(1, 4);
  return (
    <div className="flex justify-center items-center ">
      <div className=" mx-6 p-3 rounded-md mb-4 max-w-[1128px] bg-opaque">
        <div className=" text-3xl  mb-4">Featured Articles</div>
        <div className="mb-4">
          Here, you'll find in-depth articles on the fascinating world of Go
          (also known as Baduk in Korea and Weiqi in China). Explore strategic
          insights, historical context, and practical tips for improving your
          game. These articles are designed to provide you with valuable
          knowledge and actionable advice to enhance your understanding and
          mastery of this ancient board game.
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-y-3 gap-x-3 ">
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        </div>
        <div className=" text-3xl  my-4">Explore More</div>
        <div className="mb-4">
          Explore our content by searching for topics. We have a wide range of
          searchable articles that cover everything you need to know.
        </div>
        <div className="w-full outline rounded-md px-2 py-4 mb-8">
          <Image
            width={20}
            height={20}
            src="/assets/images/searchIcon.png"
            alt="search icon"
          />{" "}
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-y-3 gap-x-3 ">
          {morePosts.length > 0 &&
            morePosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Squares;
