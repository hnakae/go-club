"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HeroPost } from "../_components/hero-post";
// import { getAllPosts } from "@/lib/api";
import { fetchPosts } from "../../actions/actions";
import { PostPreview } from "../_components/post-preview";
import { Post } from "@/interfaces/post";
import Head from "next/head";
const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await fetchPosts();
      setPosts(allPosts);
      setFilteredPosts(allPosts);
    };

    fetchData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = posts
      .slice(2)
      .filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.author.name.toLowerCase().includes(term) ||
          post.content.toLowerCase().includes(term)
      );

    setFilteredPosts(filtered);
  };
  const featuredPosts = posts.filter(
    (post) =>
      post.title.toLocaleLowerCase().includes("influence") ||
      post.title.toLocaleLowerCase().includes("meetup info")
  );
  // const morePosts = allPosts.slice(2);
  return (
    <>
      <Head>
        {/* Preload images */}
        <link rel="preload" href="/assets/images/searchIcon.png" as="image" />
        {featuredPosts.map((post) => (
          <link
            key={post.slug}
            rel="preload"
            href={post.coverImage}
            as="image"
          />
        ))}
        {filteredPosts.map((post) => (
          <link
            key={post.slug}
            rel="preload"
            href={post.coverImage}
            as="image"
          />
        ))}
      </Head>
      <div className="flex justify-center items-center  z-10 w-full ">
        <div className=" px-14   py-10  rounded-md mb-4 max-w-[1128px] w-full border xs:border-none xs:px-4 border-primaryColor text-neutralColor shadow-md  backdrop-blur-md ">
          <div className="flex flex-col justify-center sm:items-center xs:items-center w-full ">
            <div className="font-playfair text-3xl xs:text-2xl font-bold mb-2 w-full sm:text-start sm:max-w-[400px]">
              Featured Articles
            </div>
            <div className="font-lora mb-6 sm:max-w-[400px]">
              Here, you'll find in-depth articles on the fascinating world of Go
              (also known as Baduk in Korea and Weiqi in China). Whether you're
              a beginner seeking foundational knowledge or an experienced player
              looking for advanced strategies, our curated selection is designed
              to provide valuable knowledge and inspiration for your next game.
            </div>
            <div className="grid grid-rows-1 grid-cols-3 gap-y-3 gap-x-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
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
              <section className="relative rounded-md overflow-hidden max-w-[400px] bg-baseColor   shadow-sm  mb-3 flex flex-col border-primaryColor border hover:text-primaryColor">
                <Image
                  src="/assets/images/cover.jpg"
                  alt="cover"
                  width={400}
                  height={400}
                  className="h-full hover:scale-125 transition-transform ease-linear object-cover "
                  placeholder="data:image/"
                />
                <div className="absolute text-white bg-darkNav top-0 left-0 w-full h-full backdrop-blur-[7px] flex justify-center items-center">
                  Explore More
                </div>
                {/* <div className=" flex flex-col justify-start items-start space-y-3 px-3 bg-primaryColor/5 h-full">
                <h3 className=" mt-3 leading-tight text-xl font-semibold font-montserrat transition-all duration-75 ease-in-out  ">
                  title
                </h3>
                <p className="font-lora pb-5 overflow-hidden text-neutralColor">
                  excerpt
                </p>
              </div> */}
              </section>
            </div>
            <div className="font-playfair text-3xl font-bold mt-10 mb-2 w-full sm:max-w-[400px] xs:max-w-[400px]">
              Explore More
            </div>
            <div className="font-lora mb-6 w-full sm:max-w-[400px] xs:max-w-[400px]">
              Explore our content by searching for topics of interest. We have a
              wide range of searchable articles that cover everything you need
              to know.
            </div>
            <div className="relative w-full sm:max-w-[400px] xs:max-w-[400px] mb-12">
              <input
                type="search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full sm:max-w-[400px] border rounded-lg p-4 pl-12 text-black"
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
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-y-3 gap-x-3">
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
                  />
                ))
              ) : (
                <section className="relative rounded-md overflow-hidden max-w-[400px] bg-baseColor   shadow-sm  mb-3 flex flex-col border-primaryColor border hover:text-primaryColor">
                  <Image
                    src="/assets/images/cover.jpg"
                    alt="cover"
                    width={400}
                    height={400}
                    className="h-full hover:scale-125 transition-transform ease-linear object-cover "
                    placeholder="data:image/"
                  />
                  <div className="absolute text-white bg-darkNav top-0 left-0 w-full h-full backdrop-blur-[7px] flex justify-center items-center">
                    Coming Soon
                  </div>
                  {/* <div className=" flex flex-col justify-start items-start space-y-3 px-3 bg-primaryColor/5 h-full">
                <h3 className=" mt-3 leading-tight text-xl font-semibold font-montserrat transition-all duration-75 ease-in-out  ">
                  title
                </h3>
                <p className="font-lora pb-5 overflow-hidden text-neutralColor">
                  excerpt
                </p>
              </div> */}
                </section>
              )}
              <section className="relative rounded-md overflow-hidden max-w-[400px] bg-baseColor   shadow-sm  mb-3 flex flex-col border-primaryColor border hover:text-primaryColor">
                <Image
                  src="/assets/images/cover.jpg"
                  alt="cover"
                  width={400}
                  height={400}
                  className="h-full hover:scale-125 transition-transform ease-linear object-cover "
                  placeholder="data:image/"
                />
                <div className="absolute text-white bg-darkNav top-0 left-0 w-full h-full backdrop-blur-[7px] flex justify-center items-center">
                  Coming Soon
                </div>
                {/* <div className=" flex flex-col justify-start items-start space-y-3 px-3 bg-primaryColor/5 h-full">
                <h3 className=" mt-3 leading-tight text-xl font-semibold font-montserrat transition-all duration-75 ease-in-out  ">
                  title
                </h3>
                <p className="font-lora pb-5 overflow-hidden text-neutralColor">
                  excerpt
                </p>
              </div> */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
