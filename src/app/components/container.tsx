type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    // w-[90%] max-w-[1000px]
    // space-y-36 sm:space-y-12  pb-36
    <div className=" flex  flex-col items-center  max-w-[1024px] mx-auto px-6 xs:px-0 select-none">
      {children}
    </div>
  );
};

export default Container;
