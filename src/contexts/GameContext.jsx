import { createContext, useContext, useReducer } from "react";

const GamesContext = createContext();

const choices = ["rock", "paper", "scissors"];

// Initial state
const initialState = {
  gameStage: "start",
  playerChoice: null,
  computerChoice: null,
  result: null,
  score: 0,
};

// Reducer function
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

function GamesProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

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

  const startGame = () => {
    dispatch({ type: "START_GAME" });
  };

  const playGame = function (playerSection) {
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

  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <GamesContext.Provider
      value={{
        startGame,
        gameStage: state.gameStage,
        playerChoice: state.playerChoice,
        computerChoice: state.computerChoice,
        result: state.result,
        score: state.score,
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
