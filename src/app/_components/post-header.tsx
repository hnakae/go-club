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
    <div className="flex justify-center items-center  z-10 w-full   ">
      <div className="    py-10 my-4 max-w-[1128px] xs:px-4 sm:px-6 md:px-20 lg:px-44 xl:px-44 2xl:px-48 rounded-md flex  justify-center items-center  w-full xs:border-none xs:my-0  text-neutralColor z-20 border border-primaryColor backdrop-blur-md">
        <div className=" w-full px-10  flex sm:flex-col-reverse xs:flex-col-reverse  items-center justify-around rounded-md  text-neutralColor    z-20  border-primaryColor ">
          <div className="flex flex-col items-start mt-4">
            <PostTitle>{title}</PostTitle>
            <div className="">
              <Avatar name={author.name} picture={author.picture} />
            </div>
          </div>
          <div className="">
            <CoverImage title={title} src={coverImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
