import ChooseBonusBox from "./ChooseBonusBox";
import BonusDecision from "./BonusDecision";
import { useBonus } from "../contexts/GameBonusContext";

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
    case "lizard":
      return {
        outer: "bg-primary-purple-600",
        shadow: "shadow-[0_10px_0_rgba(95,55,169,0.9)]",
      };
    case "spock":
      return {
        outer: "bg-primary-light-blue-400",
        shadow: "shadow-[0_10px_0_rgba(45,140,169,0.9)]",
      };
    default:
      return {
        outer: "bg-[#f1f1f1]",
        shadow: "shadow-[0_10px_0_rgba(123,126,147,0.9)]",
      };
  }
};

function ChooseBonusBoxes() {
  const { playerChoice, computerChoice, result } = useBonus();

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
        <ChooseBonusBox
          heading="You picked"
          type={playerImage}
          isWinner={player}
          palette={getChoicePalette(playerChoice)}
        />

        {winner && <BonusDecision />}

        <ChooseBonusBox
          heading="The house picked"
          type={computerImage}
          isWinner={computer}
          palette={getChoicePalette(computerChoice)}
        />
      </div>
    </div>
  );
}

export default ChooseBonusBoxes;
