import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
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
    <section className=" rounded-md overflow-hidden bg-baseColor   shadow-sm  mb-3 flex flex-col border-primaryColor border hover:text-primaryColor">
      <Link href={`/posts/${slug}`} className=" ">
        <div className="overflow-hidden">
          <Image
            src={coverImage}
            alt="cover"
            width={400}
            height={400}
            className="max-h-[120px] hover:scale-125 transition-transform ease-linear object-cover"
            placeholder="data:image/"
          />
        </div>
        <div className=" flex flex-col justify-start items-start space-y-3 px-3 bg-primaryColor/5 h-full">
          <h3 className=" mt-3 leading-tight text-xl font-semibold font-montserrat transition-all duration-75 ease-in-out  ">
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
