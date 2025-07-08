"use client";
import React from "react";
import Image from "next/image";
import { Post } from "@/interfaces/post";
import { PostPreview } from "../_components/post-preview";

type Part3Props = {
  posts: Post[];
};

const Part3: React.FC<Part3Props> = ({ posts }) => {
  // Filter posts by Chapter 4 and Chapter 5 only
  const filteredPosts = posts
    .filter((post) => post.chapter === "Chapter 4" || post.chapter === "Chapter 5")
    .sort((a, b) => {
      const tagA = parseInt(a.tags);
      const tagB = parseInt(b.tags);
      return tagA - tagB;
    });

  return (
    <div className="z-30 mb-6">
      <div className="font-playfair text-3xl font-bold mt-6 mb-2 w-full sm:max-w-[400px] xs:max-w-[400px] text-white">
        Develop Your Senses
      </div>
      <div className="font-lora mb-4 w-full sm:max-w-[400px] xs:max-w-[400px]">
        Refining judgment through attack and sacrifice
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-y-2 gap-x-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              tags={post.tags}
              chapter={post.chapter}
            />
          ))
        ) : (
          <section className="relative rounded-md overflow-hidden max-w-[400px] bg-baseColor shadow-sm mb-3 flex flex-col border-primaryColor border hover:text-primaryColor">
            <Image
              src="/assets/images/cover.jpg"
              alt="cover"
              width={400}
              height={400}
              className="h-full hover:scale-125 transition-transform ease-linear object-cover"
              placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
            <div className="absolute text-white bg-darkNav top-0 left-0 w-full h-full backdrop-blur-[7px] flex justify-center items-center">
              No posts from Chapter 4 or 5
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Part3;
