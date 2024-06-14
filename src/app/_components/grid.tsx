import Image from "next/image";

const Grid = () => {
  const colors = [
    "#4C82DE", //blue
    "#7567DB", //purple
    "#E86A63", //red-orange
    "#E778C1", //pink
    "#FF9147", //orange
    "#47BF82", //green
  ];
  const gradients = [
    { from: "#9EBCFC", to: "#A8E2F1" }, // gradient 1
    { from: "#A69EF5", to: "#DCC9FE" }, // gradient 2
    { from: "#FF9E98", to: "#FFD4BF" }, // gradient 3
    { from: "#FFB5E8", to: "#FFDAE6" }, // gradient 4
    { from: "#FFC48B", to: "#FFEFBB" }, // gradient 5
    { from: "#89E6B2", to: "#DFF8B4" }, // gradient 6
  ];
  const icons = [
    "/icons/glass.png", // icon for Game Reviews
    "/path/to/icon2.png", // icon for Pro Games
    "/path/to/icon3.png", // icon for Tsumego
    "/path/to/icon4.png", // icon for Joseki
    "/path/to/icon5.png", // icon for Shapes
    "/path/to/icon6.png", // icon for Endgame
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
      <div className="w-full flex flex-col   mt-6">
        <div className="font-playfair leading-[1.06] tracking-[1.88px] font-semibold text-center text-[52px]   ">
          Our Activities
        </div>
        <div className="grid grid-rows-2 grid-cols-3 gap-y-6 p-4 xs:grid-rows-3 xs:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="  flex flex-col items-center justify-center "
            >
              {/* <span
                className="rounded-full w-[50px] h-[50px] mb-3 "
                style={{ backgroundColor: colors[index] }}
              /> */}
              <span
                className="relative rounded-full w-[80px] h-[80px] mb-3"
                style={{
                  background: `linear-gradient(to bottom right, ${gradients[index].from}, ${gradients[index].to})`,
                }}
              >
                <Image
                  src={icons[index]}
                  alt={`${item} icon`}
                  width={25}
                  height={25}
                  className="object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </span>

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
