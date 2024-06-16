import React from "react";
import Quote from "./quote";

const Squares = () => {
  return (
    <>
      <div className="grid grid-rows-2 grid-cols-2 gap-y-3 gap-x-3 px-3 ">
        <div className="bg-white">
          <div className="flex flex-col justify-center items-center space-y-3 py-12">
            <div className="text-4xl font-bold font-">Title</div>
            <div>Excerpt</div>
            <div className="bg-blue-500 flex justify-center items-center rounded-full text-white py-2 px-4 hover:cursor-pointer">
              Learn more
            </div>
          </div>
        </div>
        <div className="bg-black  text-white">
          <div className="flex flex-col justify-center items-center space-y-3 py-12">
            <div className="text-4xl font-bold font-">Title</div>
            <div>Excerpt</div>
            <div className="bg-blue-500 flex justify-center items-center rounded-full text-white py-2 px-4 hover:cursor-pointer">
              Learn more
            </div>
          </div>
        </div>
        <div className="bg-black text-white">
          <div className="flex flex-col justify-center items-center space-y-3 py-12">
            <div className="text-4xl font-bold font-">Title</div>
            <div>Excerpt</div>
            <div className="bg-blue-500 flex justify-center items-center rounded-full text-white py-2 px-4 hover:cursor-pointer">
              Learn more
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center text-lg font-semibold hover:cursor-pointer">
          Read more
        </div>
      </div>
    </>
  );
};

export default Squares;
