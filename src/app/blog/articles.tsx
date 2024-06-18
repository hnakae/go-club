import React from "react";
import Quote from "../_components/quote";
import Image from "next/image";
import { HeroPost } from "../_components/hero-post";
import { getAllPosts } from "@/lib/api";
import { GameReviews } from "../_components/game-reviews";
import { PostPreview } from "../_components/post-preview";
const Articles = () => {
  const allPosts = getAllPosts();

  // const heroPost = allPosts[0];
  const featuredPosts = allPosts.slice(0, 2);
  // console.log(heroPost);

  const morePosts = allPosts.slice(2);
  return (
    <div className="flex justify-center items-center z-10 mb-[5rem]">
      <div className=" mx-6 px-14 py-10 rounded-md mb-4 max-w-[1128px] border bg-beige1">
        <div className=" text-3xl font-bold mb-2">Featured Articles</div>
        <div className="mb-6">
          Here, you'll find in-depth articles on the fascinating world of Go
          (also known as Baduk in Korea and Weiqi in China). Explore strategic
          insights, historical context, and practical tips for improving your
          game. These articles are designed to provide you with valuable
          knowledge and actionable advice to enhance your understanding and
          mastery of this ancient board game.
        </div>
        <div className="grid grid-rows-1 grid-cols-3 gap-y-3 gap-x-4 ">
          {featuredPosts.length > 0 &&
            featuredPosts.map((featuredPost) => (
              <HeroPost
                title={featuredPost.title}
                coverImage={featuredPost.coverImage}
                date={featuredPost.date}
                author={featuredPost.author}
                slug={featuredPost.slug}
                excerpt={featuredPost.excerpt}
              />
            ))}
        </div>
        <div className=" text-3xl font-bold mt-10 mb-2">Explore More</div>
        <div className="mb-6">
          Explore our content by searching for topics. We have a wide range of
          searchable articles that cover everything you need to know.
        </div>
        <div className="relative w-full mb-12">
          <input
            type="search"
            className="w-full border rounded-lg p-4 pl-12"
            placeholder="Search..."
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Image
              width={20}
              height={20}
              src="/assets/images/searchIcon.png"
              alt="search icon"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-y-3 gap-x-4 ">
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

export default Articles;
