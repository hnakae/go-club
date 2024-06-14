import Image from "next/image";

export function Events() {
  return (
    <>
      <div className="  bg-[#ffffff]  h-fit flex-col flex items-start  justify-center max-w-[1000px]  border-black border-b">
        <div className="font-playfair font-semibold  text-[32px]    tracking-tighter leading-tight  ">
          Events
        </div>
      </div>
      <a
        className=" text-[24px] hover:underline text-blue-700 font-bold border"
        href="https://gocongress.org/"
        target="_blank"
      >
        <div className=" bg-white flex items-center justify-center  ">
          <div className="">
            <Image
              src="/assets/images/40thUSGoCongress.png"
              alt="image"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="font-playfair font-bold text-3xl mb-3">
              US Go Congress 2024
            </div>
            <div className="font-montserrat">July 13-21</div>
          </div>
        </div>
      </a>
    </>
  );
}
