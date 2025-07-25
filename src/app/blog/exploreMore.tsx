"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Post } from "@/interfaces/post";
import { PostPreview } from "../components/post-preview";

// Renamed Featured to Begginer Basics. (shape/direction)


type ExploreMoreProps = {
  posts: Post[]; // Pass all non-featured posts
};

const ExploreMore: React.FC<ExploreMoreProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  // Only include posts from chapters 2 and 3
  const chapterFilteredPosts = posts.filter(
    (post) => post.chapter === "Chapter 2" || post.chapter === "Chapter 3"
  );

  useEffect(() => {
    setFilteredPosts(chapterFilteredPosts);
  }, [posts]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.author.name.toLowerCase().includes(term) ||
          post.tags?.toLowerCase().includes(term)
      );
      setFilteredPosts(filtered);
    }
  };

  // Function to sort posts by tags (assuming tags are numeric strings)
  const sortByTags = (a: Post, b: Post) => {
    // Convert tags to integers for comparison, providing a default if undefined
    const tagA = parseInt(a.tags || "0"); // Assuming "0" is a reasonable default for sorting
    const tagB = parseInt(b.tags || "0"); // Assuming "0" is a reasonable default for sorting
    return tagA - tagB;
  };

  // Sort filtered posts by tags
  filteredPosts.sort(sortByTags);

  return (
    <div className="z-30">
      <div className="font-playfair text-3xl font-bold mt-6 mb-2 w-full sm:max-w-[400px] xs:max-w-[400px] text-white">
        Beginner Basics
      </div>
      <div className="font-lora mb-4 w-full sm:max-w-[400px] xs:max-w-[400px]">
        Learn the basics of Go
      </div>
      {/* Search bar */}
      {/* <div className="relative w-full sm:max-w-[400px] xs:max-w-[400px] mb-4">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full sm:max-w-[400px]  rounded-lg p-4 pl-12 text-primaryColor caret-primaryColor focus:outline-primaryColor"
          placeholder="Search by chapter (0-5)"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Image
            width={20}
            height={20}
            src="/assets/images/searchIcon.png"
            alt="search icon"
          />
        </div>
      </div> */}
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
              Search by chapter (0-5)
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ExploreMore;
