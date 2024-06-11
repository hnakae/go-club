import Image from "next/image";

export function Events() {
  return (
    <>
      <div className=" mt-36 bg-[#ffffff] py-6 mx-16 h-fit flex-col flex items-start  justify-center rounded-md ">
        <div className="mx-16 font-black text-[32px]    tracking-tighter leading-tight">
          Events
        </div>
      </div>
      <div className=" mx-16 h-fit bg-[#ffffff] flex items-center justify-start">
        <div className="mx-16">
          <Image
            src="/assets/images/40thUSGoCongress.png"
            alt="image"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <a
            className=" text-[24px] hover:underline text-blue-700 font-bold"
            href="https://gocongress.org/"
            target="_blank"
          >
            US Go Congress 2024
          </a>
          <div>July 13-21</div>
        </div>
      </div>
    </>
  );
}
