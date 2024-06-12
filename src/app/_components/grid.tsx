import React from "react";

const Grid = () => {
  const colors = [
    "#4C82DE",
    "#7567DB",
    "#E86A63",
    "#E778C1",
    "#FF9147",
    "#47BF82",
  ];
  const items = [
    "Game Reviews",
    "Pro Games",
    "Tsumego",
    "Joseki",
    "Shapes",
    "Endgame",
  ];
  const descriptions = [
    "Play and review",
    "Study professional games",
    "Solve Tsumego puzzles",
    "Understand Joseki",
    "Learn shapes",
    "Practice the endgame",
  ];
  return (
    <>
      <div className="w-full flex flex-col  mb-36 ">
        <div className="font-playfair leading-[1.06] tracking-[1.88px] font-semibold text-center text-[52px] mb-20 mt-24 ">
          Our Activities
        </div>
        <div className="grid grid-rows-2 grid-cols-3 gap-y-6 p-4 xs:grid-rows-3 xs:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="  flex flex-col items-center justify-center "
            >
              <span
                className="rounded-full w-[50px] h-[50px] mb-3 "
                style={{ backgroundColor: colors[index] }}
              />
              <div className="font-lora text-lg font-semibold tracking-wider mb-3">
                {item}
              </div>
              <div className="font-lora text-center text-sm text-gray-600 xs:hidden sm:hidden">
                {descriptions[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
