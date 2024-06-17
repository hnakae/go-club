import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Image from "next/image";

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
    // <div className="rounded-md shadow-sm  bg-white  w-full mx-3">
    //   <div className=" flex justify-center items-center ">
    //     <CoverImage slug={slug} title={title} src={coverImage} />
    //   </div>
    // </div>
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`/posts/${slug}`}>
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          width={600}
          height={400}
          className="rounded-md mb-4"
        />
        <h2 className="text-2xl mb-2">{title}</h2>
        <p className="text-sm mb-4">
          {date} by {author.name}
        </p>
        <p className="text-md">{excerpt}</p>
      </Link>
    </div>
  );
}
