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
  tags: string;
  chapter: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  tags,
  slug,
  chapter,
}: Props) {
  // console.log("Chapter:", chapter);

  return (
    <section className="rounded-md overflow-hidden bg-primaryColor/5 max-w-[400px] shadow-sm mb-2 flex flex-col border-primaryColor border hover:border-primaryColor/80 hover:shadow-md transition-all group ring-1 ring-primaryColor/30 hover:ring-primaryColor/50">
      <Link href={`/posts/${slug}`} draggable={false} className="">
        <div className="overflow-hidden">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            width={400}
            height={400}
            draggable={false}
            className="max-h-[120px]  group-hover:brightness-105 transition-all duration-150 ease-out object-cover"
          />{" "}
        </div>
        <div className="flex flex-col justify-start items-start space-y-3 px-3 bg-primaryColor/5 h-full group-hover:bg-primaryColor/10 transition-colors duration-150">
          {/* <CoverImage title={title} src={author.picture} slug={slug} /> */}

          <h2 className="mt-3 leading-tight text-xl font-semibold font-montserrat text-primaryColor transition-colors duration-150 ease-in-out">
            {title}
          </h2>
          {/* <p className="font-lora text-sm pb-5 text-neutralColor">
            by {author.name}
          </p> */}
          <p className="font-lora pb-5 overflow-hidden text-neutralColor">
            {excerpt}
          </p>
        </div>
      </Link>
    </section>
  );
}
