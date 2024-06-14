type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    // w-[90%] max-w-[1000px]
    // space-y-36 sm:space-y-12  pb-36
    <div className="container flex  flex-col max-w-[1000px]  mx-auto ">
      {children}
    </div>
  );
};

export default Container;
