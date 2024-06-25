"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Post } from "@/interfaces/post";
import { PostPreview } from "../_components/post-preview";

type ExploreMoreProps = {
  posts: Post[]; // Pass all non-featured posts
};

const ExploreMore: React.FC<ExploreMoreProps> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    setFilteredPosts(posts);
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
          post.tags.toLowerCase().includes(term)
      );
      setFilteredPosts(filtered);
    }
  };

  // Function to sort posts by tags (assuming tags are numeric strings)
  const sortByTags = (a: Post, b: Post) => {
    // Convert tags to integers for comparison
    const tagA = parseInt(a.tags);
    const tagB = parseInt(b.tags);
    return tagA - tagB;
  };

  // Sort filtered posts by tags
  filteredPosts.sort(sortByTags);

  return (
    <div className="z-30">
      <div className="font-playfair text-3xl font-bold mt-10 mb-2 w-full sm:max-w-[400px] xs:max-w-[400px]">
        Explore More
      </div>
      <div className="font-lora mb-6 w-full sm:max-w-[400px] xs:max-w-[400px]">
        Explore our content by searching for topics of interest. We have a wide
        range of searchable articles that cover everything you need to know.
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
              Coming Soon
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ExploreMore;
