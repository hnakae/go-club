import React from "react";
import Image from "next/image";
import { HeroPost } from "../_components/hero-post";
import { Post } from "@/interfaces/post";

type FeaturedProps = {
  featuredPosts: Post[];
};

const Featured: React.FC<FeaturedProps> = ({ featuredPosts }) => {
  return (
    <>
      <div className="font-playfair text-3xl xs:text-2xl font-bold mb-2 w-full sm:text-start sm:max-w-[400px]">
        Featured Articles
      </div>
      <div className="font-lora mb-6 sm:max-w-[400px]">
        Here, you'll find in-depth articles on the fascinating world of Go{" "}
        <span className="xs:hidden sm:hidden">
          (also known as Baduk in Korea and Weiqi in China)
        </span>
        . Whether you're a beginner seeking foundational knowledge or an
        experienced player looking for advanced strategies, our curated
        selection is designed to provide valuable knowledge and inspiration for
        your next game.
      </div>
      <div className="grid grid-rows-1 grid-cols-3 gap-y-3 gap-x-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
        {featuredPosts.length > 0 &&
          featuredPosts.map((featuredPost) => (
            <HeroPost
              key={featuredPost.slug}
              title={featuredPost.title}
              coverImage={featuredPost.coverImage}
              date={featuredPost.date}
              author={featuredPost.author}
              slug={featuredPost.slug}
              excerpt={featuredPost.excerpt}
            />
          ))}
        <section className="relative rounded-md overflow-hidden max-w-[400px] bg-baseColor shadow-sm mb-3 flex flex-col border-primaryColor border hover:text-primaryColor">
          <Image
            src="/assets/images/cover.jpg"
            alt="cover"
            width={400}
            height={400}
            className="h-full hover:scale-125 transition-transform ease-linear object-cover"
            placeholder="data:image/"
          />
          <div className="absolute text-white bg-darkNav top-0 left-0 w-full h-full backdrop-blur-[7px] flex justify-center items-center">
            Explore More
          </div>
        </section>
      </div>
    </>
  );
};

export default Featured;
