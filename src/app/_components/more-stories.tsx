import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section className=" px-16 flex flex-col ">
      <h2 className="underline decoration-yellow-300 text-[40px] font-semibold tracking-tighter leading-tight  flex justify-center items-center h-24 my-8">
        Game Reviews
      </h2>
      <div className="grid grid-cols-1  gap-y-20  mb-8 ">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
