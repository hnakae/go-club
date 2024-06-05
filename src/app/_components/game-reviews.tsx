import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function GameReviews({ posts }: Props) {
  return (
    <section className="bg-teal-100 rounded-md py-4 mx-16 mb-8 flex flex-col p-6 h-full">
      <h2 className=" decoration-yellow-300 text-[30px] font-medium tracking-tighter leading-tight  flex justify-center items-center mb-4">
        Games Reviews
      </h2>

      <div className="flex  justify-around items-center  ">
        {posts.slice(0, 1).map((post) => (
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
        <div className="rounded-md shadow-md  bg-white h-[260px]">
          <div className="flex flex-col bg-gray-100 px-12 py-9 rounded-md">
            <h1>Name</h1>
            <input></input>
            <div>Comments</div>
            <input className="mb-3"></input>
            <button className="mb-3 border hover:border-black">
              select file
            </button>
            <button className="py-2 px-4 rounded-md bg-teal-500 hover:bg-teal-600 text-white">
              Submit
            </button>
          </div>
        </div>
        {posts.slice(1, 2).map((post) => (
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
