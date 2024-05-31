import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function GameReviews({ posts }: Props) {
  return (
    <section className="bg-[#ffffff] rounded-md py-4 mx-16 mb-8 flex flex-col ">
      <h2 className=" decoration-yellow-300 text-[30px] font-medium tracking-tighter leading-tight  flex justify-start pl-6 items-center mb-4">
        Games Reviews
      </h2>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4  px-6">
        {posts.slice(0, 3).map((post) => (
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
        <div className="text-blue-600 flex justify-end w-[1000px] px-44 cursor-pointer hover:underline">
          see more
        </div>
      </div>
    </section>
  );
}
