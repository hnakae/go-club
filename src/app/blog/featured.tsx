import React from "react";
import Image from "next/image";
import { HeroPost } from "../components/hero-post";
import { Post } from "@/interfaces/post";

// Renamed Featured to Foundations of Strong Play. (strength/surround)

type FeaturedProps = {
  featuredPosts: Post[];
};

const Featured: React.FC<FeaturedProps> = ({ featuredPosts }) => {
  return (
    <>
      <div className="font-playfair text-3xl xs:text-2xl font-bold w-full sm:text-start sm:max-w-[400px] text-white my-2">
        Foundations of Strong Play
      </div>
      <div className="font-lora mb-4 sm:max-w-[400px] w-full text-start">
        Core principles for decision-making
      </div>
      <div className="grid grid-rows-1 grid-cols-2  gap-x-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
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
              tags={featuredPost.tags}
            />
          ))}
        {/* <section className="relative rounded-md overflow-hidden max-w-[400px] bg-baseColor shadow-sm mb-3 flex flex-col border-primaryColor border hover:text-primaryColor">
          <Image
            src="/assets/images/cover.jpg"
            alt="cover"
            width={400}
            height={400}
            className="h-full hover:scale-125 transition-transform ease-linear object-cover"
            placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          />
          <div className="absolute text-white bg-darkNav top-0 left-0 w-full h-full backdrop-blur-[7px] flex justify-center items-center flex-col">
            <div>Explore More</div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Featured;
