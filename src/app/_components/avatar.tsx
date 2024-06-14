type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      {/* <img
        src={picture}
        className="w-16 h-16 rounded-full mr-4 pointer-events-none select-none"
        alt={name}
      /> */}
      <div className="font-montserrat text-xl font-bold">-{name}</div>
    </div>
  );
};

export default Avatar;
