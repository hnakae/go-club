import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import Form from "./form";

type Props = {
  posts: Post[];
};

export function GameReviews({ posts }: Props) {
  return (
    <section className="bg-teal-100 rounded-md py-4 mx-16 mb-8 flex flex-col p-6 h-full">
      <h2 className=" decoration-yellow-300 text-[30px] font-medium tracking-tighter leading-tight  flex justify-center items-center mb-4">
        Games Reviews
      </h2>

      <div className="flex  justify-around items-center mb-6 ">
        {/* {posts.slice(0, 1).map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))} */}
        <Form />
        {/* {posts.slice(1, 2).map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))} */}
      </div>
    </section>
  );
}
