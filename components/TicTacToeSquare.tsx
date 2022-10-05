import React from "react";
import { ReactNode } from "react";

interface TicTacToeSquareProps {
  children: ReactNode;
}

export function TicTacToeSquare({ children }: TicTacToeSquareProps) {
  return (
    <div className="h-36 border-solid border-4 border-slate-200 font-display text-7xl text-center flex justify-center items-center cursor-pointer">
      {children}
    </div>
  );
}
