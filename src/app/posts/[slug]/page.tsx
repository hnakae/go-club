import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/components/container";
import { PostHeader } from "@/app/components/post-header";
import { PostBody } from "@/app/components/post-body";
import ExploreMore from "@/app/blog/exploreMore";
import { useTina } from "tinacms/dist/react";
import client from "../../../../tina/__generated__/client";

export default async function Post({ params }: Params) {
  const { data } = await client.queries.post({
    relativePath: `${params.slug}.md`,
  });

  const { data: liveData } = useTina({
    query: `
      query PostQuery($relativePath: String!) {
        post(relativePath: $relativePath) {
          title
          body
          coverImage
          date
          author {
            name
            picture
          }
          excerpt
          chapter
        }
      }
    `,
    variables: { relativePath: `${params.slug}.md` },
    data,
  });

  const post = liveData.post;

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.body || "");

  const allPosts = getAllPosts();

  const nonFeaturedPosts = allPosts.filter(
    (post) => !post.tags?.toLowerCase().includes("featured")
  );

  return (
    <main className="flex items-center justify-center ">
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
          <PostBody content={content} />
          
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
      images: [post.ogImage?.url || '/assets/images/cover.jpg'], // Fallback to a default image
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
