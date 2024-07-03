import React from "react";
import Image from "next/image";

interface ImageTextProps {
  src: string;
  text1: string;
  text2: string;
}

const ImageText = ({ src, text1, text2 }: ImageTextProps) => {
  return (
    <div className="flex w-full mt-3 pb-8">
      <div className="w-1/3 max-w-1/3 rounded-sm overflow-hidden">
        <Image src={src} alt="image" width={600} height={600} />
      </div>
      <div className="flex flex-col justify-center">
        <div className="max-w-[500px] p-3 flex items-center">{text1}</div>
        <div className="max-w-[500px] p-3 flex items-center">{text2}</div>
      </div>
    </div>
  );
};

export default ImageText;
