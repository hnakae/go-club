type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    // w-[90%] max-w-[1000px]
    <div className="container flex  flex-col max-w-[1000px]  my-0 mx-auto   ">
      {children}
    </div>
  );
};

export default Container;
