import React from "react";
import { useState, useEffect } from "react";
import TicTacToeSquare from "./TicTacToeSquare";

interface ScoresProps {
  [key: string]: number;
}

const INITIAL_GAME_STATE = ["", "", "", "", "", "", "", "", ""];
const INITIAL_SCORES: ScoresProps = { X: 0, O: 0 };
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function TicTacToe() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scores, setScores] = useState(INITIAL_SCORES); // mange scores in state

  /* PRESIST SCORE WHEN REFRESHING THE PAGE - localStorage */
  useEffect(() => {
    const storedScores = localStorage.getItem("scores");
    if (storedScores) {
      // only if the score exists
      setScores(JSON.parse(storedScores));
    }
  }, []);

  useEffect(() => {
    // dont want to check for winner when the game state is initial
    if (gameState === INITIAL_GAME_STATE) {
      return;
    }

    checkForWinner();
    // changePlayer(); // change player when gameState changes
  }, [gameState]);

  const resetBoard = () => setGameState(INITIAL_GAME_STATE);

  const handleWin = () => {
    window.alert(`Congrats player ${currentPlayer}! You are the winner!`);

    const newPlayerScore = scores[currentPlayer] + 1; // add score for this player
    const newScores = { ...scores };
    newScores[currentPlayer] = newPlayerScore; // mutate current player store
    setScores(newScores); // set State
    localStorage.setItem("scores", JSON.stringify(newScores)); // localStorage must store string, cannot store obect

    resetBoard();
  };

  const handleDraw = () => {
    window.alert("The game ended in a draw");

    resetBoard();
  };

  const checkForWinner = () => {
    let roundWon = false;

    for (let i = 0; i < WINNING_COMBOS.length; i++) {
      const winCombo = WINNING_COMBOS[i];

      let a = gameState[winCombo[0]];
      let b = gameState[winCombo[1]];
      let c = gameState[winCombo[2]];

      if ([a, b, c].includes("")) {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      setTimeout(() => handleWin(), 500); // after .5 second
      return;
    }

    if (!gameState.includes("")) {
      setTimeout(() => handleDraw(), 500);
      return;
    }

    changePlayer();
  };

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };
  const handleCellClick = (e: any) => {
    // console.log("cell clicked!", e.target.getAttribute("data-cell-index"));
    // console.log("TicTacToe handleCellClick currentValue", currentValue);
    const cellIndex = Number(e.target.getAttribute("data-cell-index"));
    const currentValue = gameState[cellIndex];
    if (currentValue) {
      return;
    }
    const newValues = [...gameState];
    newValues[cellIndex] = currentPlayer;
    setGameState(newValues);
  };

  return (
    <div className=" h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto w-auto overflow-hidden">
      <h1 className=" font-burtons text-white text-2xl mx-auto w-96 mb-5">
        Tic Tac Toe Game
      </h1>
      <div>
        <div>
          <div className="grid grid-cols-3 gap-3 mx-auto w-96">
            {gameState.map((player, index) => (
              <TicTacToeSquare
                key={index}
                onClick={handleCellClick}
                {...{ index, player }}
              ></TicTacToeSquare>
            ))}
          </div>
          <div className=" font-burtons mx-auto w-96 text-2xl text-serif">
            <p className="text-white mt-5">
              Next Player: <span>{currentPlayer}</span>
            </p>
            <p className="text-white mt-5">
              Player X wins: <span>{scores["X"]}</span>
            </p>
            <p className="text-white mt-5">
              Player O wins: <span>{scores["O"]}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
