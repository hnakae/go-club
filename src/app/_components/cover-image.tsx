/*
This component is referenced in:

 src/app/_components/hero-post.tsx - There's a commented out line that would use CoverImage
 src/app/_components/post-preview.tsx - Also has a commented out reference to CoverImage
 
It appears that the CoverImage component was likely used in an earlier version of your blog, but has been replaced with direct usage of the Next.js Image component in your current implementation. */

import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className=" rounded-md object-contain w-full pointer-events-none select-none max-h-[300px]"
      width={1300}
      height={630}
      priority={true}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
