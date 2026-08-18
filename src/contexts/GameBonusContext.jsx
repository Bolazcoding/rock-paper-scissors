import { createContext, useContext, useReducer } from "react";

const GamesBonusContext = createContext();

const choices = ["rock", "paper", "scissors", "lizard", "spock"];

// Initial state
const initialState = {
  gameStage: "start",
  playerChoice: null,
  computerChoice: null,
  result: null,
  score: 0,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        gameStage: "choosing",
      };

    case "PLAY_GAME":
      return {
        ...state,
        playerChoice: action.payload.playerChoice,
        computerChoice: action.payload.computerChoice,
        result: action.payload.result,
        gameStage: "result",
        score: action.payload.newScore,
      };

    case "RESET_GAME":
      return {
        ...state,
        gameStage: "start",
        playerChoice: null,
        computerChoice: null,
        result: null,
      };

    default:
      return state;
  }
};

function GamesBonusProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  function getComputerChoice() {
    const randomComputerIndex = Math.floor(Math.random() * choices.length);
    return choices[randomComputerIndex];
  }

  // const determineWinner = function (player, computer) {
  //   if (player === computer) {
  //     return "draw";
  //   }

  //   if (
  //     (player === "rock" && computer === "scissors") ||
  //     (player === "paper" && computer === "rock") ||
  //     (player === "scissors" && computer === "paper")
  //   ) {
  //     return "win";
  //   } else {
  //     return "lose";
  //   }
  // };

  const determineWinner = function (player, computer) {
    if (player === computer) {
      return "draw";
    }

    if (
      // Rock
      (player === "rock" && computer === "scissors") ||
      (player === "rock" && computer === "lizard") ||
      // Paper
      (player === "paper" && computer === "rock") ||
      (player === "paper" && computer === "spock") ||
      // Scissors
      (player === "scissors" && computer === "paper") ||
      (player === "scissors" && computer === "lizard") ||
      // Lizard
      (player === "lizard" && computer === "spock") ||
      (player === "lizard" && computer === "paper") ||
      // Spock
      (player === "spock" && computer === "scissors") ||
      (player === "spock" && computer === "rock")
    ) {
      return "win";
    } else {
      return "lose";
    }
  };

  const startGame = () => {
    dispatch({ type: "START_GAME" });
  };

  const playBonusGame = function (playerSection) {
    const computerSelection = getComputerChoice();
    const gameResult = determineWinner(playerSection, computerSelection);

    let newScore = state.score;
    if (gameResult === "win") {
      newScore = state.score + 1;
    }

    if (gameResult === "lose") {
      newScore = Math.max(state.score - 1, 0);
    }

    dispatch({
      type: "PLAY_GAME",
      payload: {
        playerChoice: playerSection,
        computerChoice: computerSelection,
        result: gameResult,
        newScore,
      },
    });
  };

  const resetBonusGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <GamesBonusContext.Provider
      value={{
        startGame,
        gameStage: state.gameStage,
        playerChoice: state.playerChoice,
        computerChoice: state.computerChoice,
        result: state.result,
        score: state.score,
        playBonusGame,
        resetBonusGame,
      }}
    >
      {children}
    </GamesBonusContext.Provider>
  );
}

function useBonus() {
  const context = useContext(GamesBonusContext);

  if (context === undefined)
    throw new Error(
      "GamesBonusContext was used outside the GamesBonusProvider",
    );

  return context;
}

export { GamesBonusProvider, useBonus };
