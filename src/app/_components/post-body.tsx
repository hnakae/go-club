import markdownStyles from "./markdown-styles.module.css";
// import ExploreMore from "../blog/exploreMore";
// import { usePosts } from "../context/PostsContext";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  // const { featuredPosts, nonFeaturedPosts } = usePosts(); // Use the context
  return (
    <div className=" w-full mb-4 px-14 py-10 border border-primaryColor rounded-md shadow-md   backdrop-blur-md">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {/* <ExploreMore posts={nonFeaturedPosts} /> */}
    </div>
  );
}
