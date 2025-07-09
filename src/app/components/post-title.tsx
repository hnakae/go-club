import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-[32px]  font-bold tracking-tighter leading-tight mb-6 text-start ">
      {children}
    </h1>
  );
}
