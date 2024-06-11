import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="mx-6 py-6 mb-36 bg-white px-10 rounded-md">
      <div className="mb-8 text-center text-4xl">How to find us</div>
      <div className="flex items-center gap-2">
        <div className="">
          <CoverImage title={title} src={coverImage} slug={slug} />
          {/* <h3 className="mb-4 text-3 leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div> */}
        </div>
        <div className="px-6 flex flex-col">
          <p className="text-lg leading-relaxed mb-4 ">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
