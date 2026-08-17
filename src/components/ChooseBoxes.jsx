// import { useEffect } from "react";
import { useGames } from "../contexts/GameContext";
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
        outer: "bg-[#4865f4]",
        shadow: "shadow-[0_10px_0_rgba(27,52,172,0.9)]",
      };
    case "scissors":
      return {
        outer: "bg-[#ecb400]",
        shadow: "shadow-[0_10px_0_rgba(168,118,6,0.9)]",
      };
    case "rock":
      return {
        outer: "bg-[#db2e4d]",
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

  const winner = result === "win" || result === "lose" || result === "draw";
  const playerImage = getChoiceImage(playerChoice);
  const computerImage = getChoiceImage(computerChoice);

  return (
    <div className="mx-auto mt-10 w-full max-w-[62rem] sm:mt-14 md:mt-16">
      <div
        className={`grid items-center justify-center gap-x-8 gap-y-8 lg:gap-x-20 ${
          winner ? "grid-cols-2 md:grid-cols-[1fr_auto_1fr]" : "grid-cols-2"
        }`}
      >
        <ChooseBox
          heading="You picked"
          type={playerImage}
          isWinner={winner}
          palette={getChoicePalette(playerChoice)}
        />

        {winner && <Decision />}

        <ChooseBox
          heading="The house picked"
          type={computerImage}
          isWinner={winner}
          palette={getChoicePalette(computerChoice)}
        />
      </div>
    </div>
  );
}

export default ChooseBoxes;
