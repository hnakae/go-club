import Image from "next/image";

const Grid = () => {
  const colors = [
    "#4C82DE", //blue
    "#7567DB", //purple
    "#E86A63", //red-orange
    // "#E778C1", //pink
    // "#FF9147", //orange
    // "#47BF82", //green
  ];
  const gradients = [
    { from: "#9EBCFC", to: "#A8E2F1" }, // gradient 1
    { from: "#A69EF5", to: "#DCC9FE" }, // gradient 2
    { from: "#FF9E98", to: "#FFD4BF" }, // gradient 3
    // { from: "#FFB5E8", to: "#FFDAE6" }, // gradient 4
    // { from: "#FFC48B", to: "#FFEFBB" }, // gradient 5
    // { from: "#89E6B2", to: "#DFF8B4" }, // gradient 6
  ];
  const icons = [
    "/icons/glass.png", // icon for Game Reviews
    "/icons/glass.png", // icon for Pro Games
    "/icons/glass.png", // icon for Tsumego
    // "/icons/glass.png", // icon for Joseki
    // "/icons/glass.png", // icon for Shapes
    // "/icons/glass.png", // icon for Endgame
  ];
  // const items = ["Play", "Review", "Tsumego", "Joseki", "Shapes", "Endgame"];
  const items = ["Play", "Study", "Train"];
  const descriptions = [
    "Play and review",
    "Study professional games",
    "Solve Tsumego puzzles",
    // "Understand Joseki",
    // "Learn shapes",
    // "Practice the endgame",
  ];
  return (
    <>
      <div className="w-full  pt-12 px-24 sm:mb-6 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center  rounded-md bg-opaque  max-w-[1128px]  w-full">
          {/* <div className="font-playfair leading-[1.06] tracking-wide font-semibold text-center text-4xl xs:text-3xl mb-12 xs:mb-6 ">
            Our Activities
          </div> */}
          <div className="grid grid-rows-1 grid-cols-3 gap-y-6 p-4 xs:grid-rows-3 xs:grid-cols-2">
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

                <div className="font-lora text-xl xs:text-lg font-semibold tracking-wider mb-3">
                  {item}
                </div>

                <div className="font-lora text-center text-md text-gray-600 xs:hidden sm:hidden tracking-wide">
                  {descriptions[index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
