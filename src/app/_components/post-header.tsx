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
    <div className="border w-full px-14 py-10 my-4 border-primaryColor rounded-md  shadow-md p-8  backdrop-blur-md flex justify-between items-center">
      <div className="flex flex-col items-start ">
        <PostTitle>{title}</PostTitle>
        <div className="">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <div className="">
        <CoverImage title={title} src={coverImage} />
      </div>
    </div>
  );
}
