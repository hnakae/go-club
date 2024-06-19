export function QA() {
  return (
    <div className="w-full flex justify-center items-start z-10 text-neutralColor h-screen">
      <div className=" max-w-[1128px] mx-6 px-14 py-10  flex-col flex items-start justify-start rounded-md  border border-primaryColor  shadow-md   backdrop-blur-md w-full ">
        <div className="font-playfair  py-6 h-fit  text-[24px] flex flex-col items-center justify-center border-b-2 ">
          Are beginners welcome?
        </div>
        <div className="font-lora  py-6 h-fit    flex flex-col items-center justify-center mb-6 text-[18px]">
          We are open to players of all skill levels and complete beginners who
          want to learn!
        </div>
        <div className="font-playfair py-6 h-fit   flex flex-col items-center justify-center border-b-2 text-[24px]">
          What is the best way to get in contact?
        </div>
        <div className="font-lora py-6 h-fit    flex flex-col items-center justify-center mb-6 text-[18px]">
          Discord will always be up to date and is the best place to get in
          contact with us.
        </div>
        <div className="font-playfair  py-6 h-fit    flex flex-col items-center justify-center border-b-2 text-[24px]">
          Can I get notifications for club days?
        </div>
        <div className="font-lora py-6 h-fit    flex flex-col items-center justify-center mb-6 text-[18px]">
          Please check Meetup.com for updates on times/places.
        </div>
      </div>
    </div>
  );
}
