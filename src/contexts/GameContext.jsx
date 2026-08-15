import { createContext, useContext, useState } from "react";

const GamesContext = createContext();

const choices = ["rock", "paper", "scissors"];

function GamesProvider({ children }) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);

  console.log(playerChoice);

  function getComputerChoice() {
    const randomComputerIndex = Math.floor(Math.random() * choices.length);
    return choices[randomComputerIndex];
  }

  const determineWinner = function (player, computer) {
    if (player === computer) {
      return "draw";
    }

    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "win";
    } else {
      return "lose";
    }
  };

  const playGame = function (playerSection) {
    const computerSelection = getComputerChoice();

    const gameResult = determineWinner(playerSection, computerSelection);

    setPlayerChoice(playerSection);
    setComputerChoice(computerSelection);
    setResult(gameResult);

    if (gameResult === "win") {
      setScore((prevScore) => prevScore + 1);
    }

    if (gameResult === "lose") {
      setScore((prevScore) => prevScore - 1);
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <GamesContext.Provider
      value={{
        playerChoice,
        computerChoice,
        result,
        score,
        playGame,
        resetGame,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
}

function useGames() {
  const context = useContext(GamesContext);

  if (context === undefined)
    throw new Error("GamesContext was used outside the GamesProvider");

  return context;
}

export { GamesProvider, useGames };
