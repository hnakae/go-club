import React from "react";
import Image from "next/image";

interface ImageTextProps {
  src: string;
  text1: string;
  text2: string;
}

const ImageText = ({ src, text1, text2 }: ImageTextProps) => {
  return (
    <div className="flex w-full mt-3 pb-8 sm:flex-col xs:flex-col justify-center items-center">
      <div className="w-1/3 sm:w-full xs:w-full rounded-sm overflow-hidden">
        <Image src={src} alt="image" width={600} height={600} />
      </div>
      <div className="w-2/3 sm:w-full xs:w-full flex flex-col justify-center">
        <div className="max-w-[500px] p-3 flex items-center">{text1}</div>
        <div className="max-w-[500px] p-3 flex items-center">{text2}</div>
      </div>
    </div>
  );
};

export default ImageText;
