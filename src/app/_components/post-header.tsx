import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  excerpt: string;
};

export function PostHeader({
  title,
  coverImage,
  date,
  author,
  excerpt,
}: Props) {
  return (
    <div className="border mx-6 px-14 py-10 border-primaryColor rounded-md mb-12 shadow-md p-8  backdrop-blur-md">
      <div className="mt-6  ">
        <PostTitle>{title}</PostTitle>
        <PostTitle>{excerpt}</PostTitle>
      </div>
      <div className="mb-8 w-full flex justify-center ">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        {/* <div className="mb-6 text-lg px-16">
          <DateFormatter dateString={date} />
        </div> */}
      </div>
    </div>
  );
}
