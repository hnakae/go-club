import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import ExploreMore from "@/app/blog/exploreMore";

// import {Goban} from 'react-go-board';

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  const allPosts = getAllPosts();

  const nonFeaturedPosts = allPosts.filter(
    (post) => !post.title.toLowerCase().includes("meetup info")
  );

  return (
    <main className="flex items-center justify-center">
      <Container>
        <article className="my-12 max-w-[900px]  z-10 text-neutralColor">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            excerpt={post.excerpt}
          />
          <PostBody content={content} />
        </article>
        <div className="flex justify-center items-center  z-10 w-full ">
          <div className=" px-14 py-10 rounded-md mb-4 max-w-[900px] w-full border xs:border-none xs:px-4 border-primaryColor text-neutralColor shadow-md backdrop-blur-md ">
            <div className="flex flex-col justify-center sm:items-center xs:items-center w-full ">
              <ExploreMore posts={nonFeaturedPosts} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Eugene Go Club`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
