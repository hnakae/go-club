import Avatar from "./avatar";
import CoverImage from "./cover-image";
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
    <div className="border w-full px-14 py-10 my-4 border-primaryColor rounded-md  shadow-md p-8  backdrop-blur-md">
      <div className=" ">
        <PostTitle>{title}</PostTitle>
        <PostTitle>{excerpt}</PostTitle>
      </div>
      <div className="mb-8 w-full flex justify-center ">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        {/* <div className="mb-6 text-lg px-16">
          <DateFormatter dateString={date} />
        </div> */}
      </div>
    </div>
  );
}
