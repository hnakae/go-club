type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container min-w-fit flex flex-col ">{children}</div>;
};

export default Container;
