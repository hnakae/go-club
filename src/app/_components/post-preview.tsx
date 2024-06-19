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
    <section className=" rounded-md overflow-hidden bg-baseColor   shadow-sm mb-3 flex flex-col border-primaryColor border">
      <Link href={`/posts/${slug}`} className=" ">
        <div className="overflow-hidden">
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            width={400}
            height={400}
            className="md:h-56 md:w-auto h-44 hover:scale-125 transition-transform ease-linear object-cover "
          />{" "}
        </div>
        <div className="flex flex-col justify-center items-start space-y-3 px-3 bg-primaryColor/5 ">
          {/* <CoverImage title={title} src={author.picture} slug={slug} /> */}
          <h2 className="mt-3 leading-tight text-xl font-semibold font-montserrat  transition-all duration-75 ease-in-out text-neutralColor hover:text-primaryColor">
            {title}
          </h2>
          <p className="font-lora text-sm pb-5">by {author.name}</p>
          {/* <p className="font-lora pb-5 overflow-hidden ">{excerpt}</p> */}
        </div>
      </Link>
    </section>
  );
}
