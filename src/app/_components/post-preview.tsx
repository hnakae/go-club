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
    <div className="rounded-md shadow-sm hover:shadow-md  bg-white h-[260px] w-full mx-3">
      <div className="bg-blue-100 h-32 flex justify-center items-center rounded-t-md">
        {/* <CoverImage slug={slug} title={title} src={coverImage} /> */}Coming
        Soon
      </div>
    </div>
  );
}
