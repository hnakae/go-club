import Image from "next/image";

export function Events() {
  return (
    <>
      <div className=" px-6 bg-[#ffffff]  h-fit flex-col flex items-start  justify-center max-w-[1000px]  ">
        <div className="font-playfair font-semibold  text-[32px] mb-12   tracking-tighter leading-tight border-b w-full border-black ">
          Events
        </div>

        <a
          className=" text-[24px] hover:underline text-blue-700 font-bold shadow-md rounded-md px-4 py-2"
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
      </div>
    </>
  );
}
