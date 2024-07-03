import React from "react";
import Image from "next/image";

interface ImageTextProps {
  src: string;
  text: string;
}

const ImageText = ({ src, text }: ImageTextProps) => {
  return (
    <div className="flex w-full mt-3">
      <div className="w-full rounded-sm overflow-hidden">
        <Image src={src} alt="image" width={600} height={600} />
      </div>

      <div className="max-w-[500px] p-3 ">{text}</div>
    </div>
  );
};

export default ImageText;
