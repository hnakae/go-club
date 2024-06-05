import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="rounded-md shadow-sm  bg-white  w-full mx-3">
      <div className=" flex justify-center items-center ">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
    </div>
  );
}
