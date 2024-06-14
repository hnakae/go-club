type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    // w-[90%] max-w-[1000px]
    <div className="container flex  flex-col max-w-[1000px]  mx-auto  space-y-36 pt-24 pb-36">
      {children}
    </div>
  );
};

export default Container;
