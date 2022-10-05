import React from "react";
import { useState } from "react";
const INITIAL_GAME_STATE = ["X", "O", "", "", "", "", "", "", ""];

export default function TicTacToe() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  return (
    <div className=" h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-teal-500">
      <h1 className=" font-burtons">Tic Tac Toe Game</h1>
      <div>
        <div>
          <div className="grid grid-cols-3 gap-3 mx-auto w-96">
            {gameState.map((player, index) => (
              <div
                key={index}
                className="h-36 border-solid border-4 border-slate-200 font-display text-7xl text-center flex justify-center items-center cursor-pointer"
              >
                {player}
              </div>
            ))}
          </div>
          <div>Scores Go Here</div>
        </div>
      </div>
    </div>
  );
}
