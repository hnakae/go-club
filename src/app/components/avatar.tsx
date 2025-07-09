type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-end  ">
      <img
        src={picture}
        className="w-16 h-16 rounded-full mr-4 pointer-events-none select-none"
        alt={name}
      />
      <div className="font-montserrat text-xl opacity-80">{name}</div>
    </div>
  );
};

export default Avatar;
