import { useGames } from "../contexts/GameContext";
import { useEffect, useState } from "react";
import ChooseBox from "./ChooseBox";
import Decision from "./Decision";

const getChoiceImage = (choice) => {
  if (!choice) return null;
  return `/images/icon-${choice}.svg`;
};

const getChoicePalette = (choice) => {
  switch (choice) {
    case "paper":
      return {
        outer: "bg-primary-blue-500",
        shadow: "shadow-[0_10px_0_rgba(27,52,172,0.9)]",
      };
    case "scissors":
      return {
        outer: "bg-primary-gold-500",
        shadow: "shadow-[0_10px_0_rgba(168,118,6,0.9)]",
      };
    case "rock":
      return {
        outer: "bg-primary-red-600",
        shadow: "shadow-[0_10px_0_rgba(140,33,62,0.9)]",
      };
    default:
      return {
        outer: "bg-[#f1f1f1]",
        shadow: "shadow-[0_10px_0_rgba(123,126,147,0.9)]",
      };
  }
};

function ChooseBoxes() {
  const { playerChoice, computerChoice, result } = useGames();
  const [showComputerChoice, setShowComputerChoice] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setShowComputerChoice(false);
    });

    const timer = setTimeout(() => {
      setShowComputerChoice(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [computerChoice]);

  const winner = result === "win" || result === "lose" || result === "draw";
  const player = result === "win";
  const computer = result === "lose";
  const playerImage = getChoiceImage(playerChoice);
  const computerImage = getChoiceImage(computerChoice);

  return (
    <div className="mx-auto mt-14 w-full max-w-[62rem] sm:mt-14 md:mt-16">
      <div
        className={`grid items-center justify-center gap-x-8 gap-y-8 md:gap-x-8 lg:gap-x-8 ${
          winner ? "grid-cols-2 md:grid-cols-[1fr_auto_1fr]" : "grid-cols-2"
        }`}
      >
        <ChooseBox
          heading="You picked"
          type={playerImage}
          isWinner={player}
          showWinnerGlow={showComputerChoice}
          palette={getChoicePalette(playerChoice)}
        />

        {winner && showComputerChoice && <Decision />}

        <ChooseBox
          heading="The house picked"
          type={showComputerChoice ? computerImage : null}
          isWinner={computer}
          showWinnerGlow={showComputerChoice}
          palette={getChoicePalette(computerChoice)}
          isLoading={!showComputerChoice}
        />
      </div>
    </div>
  );
}

export default ChooseBoxes;
