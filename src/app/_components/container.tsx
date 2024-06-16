type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    // w-[90%] max-w-[1000px]
    // space-y-36 sm:space-y-12  pb-36
    <div className=" flex  flex-col  max-w-screen mx-auto space-y-8 ">
      {children}
    </div>
  );
};

export default Container;
