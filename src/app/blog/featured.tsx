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
              tags={featuredPost.tags}
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
          <div className="absolute text-white bg-darkNav top-0 left-0 w-full h-full backdrop-blur-[7px] flex justify-center items-center flex-col">
            <div>Explore More</div>
            <div>
              {" "}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="30"
                height="30"
                className=" rotate-180 mt-1 z-10 "
                // onClick={scrollToTop}
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#DAB16D"
                  stroke="none"
                >
                  <path
                    d="M2320 4810 c-520 -65 -966 -274 -1329 -624 -361 -349 -584 -780 -668
-1291 -22 -136 -25 -504 -5 -635 81 -527 301 -963 664 -1316 260 -253 538
-421 882 -533 1132 -369 2363 212 2800 1322 111 281 163 586 153 897 -12 346
-87 643 -238 943 -328 650 -931 1094 -1654 1218 -137 23 -480 34 -605 19z
m485 -261 c369 -43 750 -208 1045 -454 320 -266 563 -661 661 -1071 70 -293
67 -651 -6 -944 -147 -585 -545 -1073 -1086 -1329 -278 -132 -548 -192 -859
-192 -326 0 -587 60 -875 201 -418 204 -726 512 -926 925 -140 290 -200 549
-201 870 -2 779 435 1476 1136 1810 358 171 711 230 1111 184z"
                  />
                  <path
                    d="M2525 3066 c-16 -8 -220 -205 -452 -437 -437 -440 -446 -451 -427
-511 13 -42 44 -76 80 -88 75 -25 82 -20 371 273 148 150 312 317 365 372 l97
100 351 -357 c392 -399 389 -397 473 -360 64 29 95 107 66 165 -16 31 -808
825 -841 843 -33 17 -44 17 -83 0z"
                  />
                </g>
              </svg> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Featured;
