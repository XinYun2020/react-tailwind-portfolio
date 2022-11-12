import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode; // special type in react to accept any type of children
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-center m-0 mb-8 ">{title}</h2>
      <div className="grid gap-x-1 gap-y-4 justify-evenly grid-cols-[auto_minmax(auto,400px)] mb-6">
        {children}
      </div>
    </>
  );
}
