import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
// import markdownToHtml from "@/lib/markdownToHtml";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Container from "@/app/_components/container";
// import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import ExploreMore from "@/app/blog/exploreMore";
import dynamic from "next/dynamic";

// import {Goban} from 'react-go-board';

const ClientMDXRemote = dynamic(
  () => import("../../_components/mdx/ClientMDXRemote"),
  {
    ssr: false,
  }
);

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  // const content = await markdownToHtml(post.content || "");
  const mdxSource = await serialize(post.content || "", {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });

  const allPosts = getAllPosts();

  const nonFeaturedPosts = allPosts.filter(
    (post) => !post.tags.toLowerCase().includes("featured")
  );

  return (
    <main className="flex items-center justify-center">
      <Container>
        <article className=" max-w-[1128px]  z-10 text-neutralColor">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            excerpt={post.excerpt}
            chapter={post.chapter}
          />
          {/* <PostBody content={content} /> */}
          <div className="w-full mb-4 xs:px-4 sm:px-6 md:px-20 lg:px-44 xl:px-44 2xl:px-48 border border-primaryColor rounded-md shadow-md backdrop-blur-md">
            <ClientMDXRemote {...mdxSource} />
          </div>
        </article>
        <div className="flex justify-center items-center  z-10 w-full ">
          <div className=" px-14 py-10 rounded-md mb-4 max-w-[1128px] w-full border xs:border-none xs:px-4 border-primaryColor text-neutralColor shadow-md backdrop-blur-md ">
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
