import Avatar from "@/app/components/avatar";
import CoverImage from "@/app/components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
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
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags,
}: Props) {
  return (
    <section className="rounded-md overflow-hidden bg-primaryColor/5 max-w-[400px] shadow-sm mb-3 flex flex-col border-primaryColor border hover:border-primaryColor/80 hover:shadow-md transition-all group">
      <Link href={`/posts/${slug}`} className="" draggable={false}>
        <div className="overflow-hidden">
          <Image
            src={coverImage}
            alt="cover"
            width={400}
            height={400}
            className="max-h-[120px]  group-hover:brightness-105 transition-all duration-150 ease-out object-cover"
            placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            priority={true}
            draggable={false}
          />
        </div>
        <div className="flex flex-col justify-start items-start space-y-3 px-3 bg-primaryColor/5 h-full group-hover:bg-primaryColor/10 transition-colors duration-150">
          <h3 className="mt-3 leading-tight text-xl font-semibold font-montserrat text-primaryColor transition-colors duration-150 ease-in-out">
            {title}
          </h3>
          <p className="font-lora pb-5 overflow-hidden text-neutralColor">
            {excerpt}
          </p>
        </div>
      </Link>
    </section>
  );
}
{
  /* <div className="font-playfair leading-[1.06] tracking-wide xs:tracking-tighter sm:tracking-tight font-semibold mb-12 text-center text-[40px]">
        How To Find Us
      </div>
      <div className="flex items-stretch xs:flex-col sm:flex-col xs:space-y-3 sm:space-y-3  ">
        <div className="w-1/2 flex-grow flex-shrink-0 xs:w-full sm:w-full">
          <CoverImage title={title} src={author.picture} slug={slug} />
          <h3 className="mb-4 text-3 leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="px-6 flex flex-col w-full justify-center items-start xs:px-0 sm:px-0">
          <p className="font-lora mb-4">"{excerpt}"</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div> */
}
