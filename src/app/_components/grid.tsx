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
    "Play and review with AI",
    "Watch professional games",
    "Solve Tsumego puzzles",
    "Learn and review Joseki",
    "Understand shapes",
    "Master the endgame",
  ];
  return (
    <>
      <div className="w-full flex flex-col  mb-16 ">
        <div className="text-center text-[55px] mb-6">Services</div>
        <div className="grid grid-rows-2 grid-cols-3 gap-4 p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="  flex flex-col items-center justify-center "
            >
              <span
                className="rounded-full w-[50px] h-[50px] mb-2"
                style={{ backgroundColor: colors[index] }}
              />
              {item}
              <div className="text-center text-sm text-gray-600">
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
