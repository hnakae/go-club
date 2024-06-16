import React from "react";

const GoldenRule = () => {
  return (
    <>
      <div className="text-center border  ">Max width 1128px</div>
      <div className="border flex flex-col justify-center items-center ">
        <div className="max-w-[1128px] w-full border flex justify-center items-center">
          <div className="grid grid-cols-12 gap-x-[24px]">
            <div className="w-[72px] text-center border">72px container</div>
            <div className="w-[72px] text-center border">24px spacing</div>
            <div className="w-[72px] text-center border">1</div>
            <div className="w-[72px] text-center border">1</div>
            <div className="w-[72px] text-center border">1</div>
            <div className="w-[72px] text-center border">1</div>
            <div className="w-[72px] text-center border">1</div>
            <div className="w-[72px] text-center border">1</div>
            <div className="w-[72px] text-center border">1</div>
            <div className="w-[72px] text-center border">1</div>
            <div className="w-[72px] text-center border">1</div>
            <div className="w-[72px] text-center border">1</div>
          </div>
        </div>
        <div className="text-center border mt-[32px] ">Max width 936px</div>
        <div className="max-w-[936px] w-full border flex justify-center items-center">
          <div className="grid grid-cols-12 gap-x-[24px]">
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
            <div className="w-[56px] text-center border">56px container</div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center my-[32px] ">
        <div className=" border  flex flex-col items-start justify-center">
          <div className="mb-[16px] text-[64px] font-bold">Heading</div>
          <div className="mb-[24px] text-[44px] font-semi-bold">Subheading</div>
          <p className="text-[16px] flex-col">
            <div className="text-[20px]">the first sentence</div>
            <div>the rest of the text</div>
          </p>
          {/* <div>text</div> */}
          <div className="flex">
            <div className="flex mr-[8px]">
              <div className="mr-[4px]">icon</div>
              <div>button</div>
            </div>
            <div className="flex">
              <div className="mr-[4px]">icon</div>
              <div>button</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoldenRule;
