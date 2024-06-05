import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function GameReviews({ posts }: Props) {
  return (
    <section className="bg-[#ffffff] rounded-md py-4 mx-16 mb-8 flex flex-col  ">
      <h2 className=" decoration-yellow-300 text-[30px] font-medium tracking-tighter leading-tight  flex justify-center items-center mb-4">
        Games Reviews
      </h2>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4  ">
        {/* <div className="flex justify-center"> */}

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
        <div className="rounded-md shadow-sm hover:shadow-md  bg-white my-auto ">
          <div className="flex flex-col bg-gray-100 p-12 rounded-md">
            <h1>Name</h1>
            <input></input>
            <div>Comments</div>
            <input className="mb-3"></input>
            <button className="mb-3 border">select file</button>
            <button className="py-2 px-4 mb-6 rounded-md bg-teal-500 text-white">
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
