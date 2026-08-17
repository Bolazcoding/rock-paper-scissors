import Paper from "/images/icon-paper.svg";
import Scissors from "/images/icon-scissors.svg";
import Rock from "/images/icon-rock.svg";
import Lizard from "/images/icon-lizard.svg";
import Spock from "/images/icon-spock.svg";
import { useBonus } from "../contexts/GameBonusContext";

const choices = [
  {
    name: "paper",
    image: Paper,
    position:
      "left-0 top-0 max-[640px]:top-[2rem] max-[640px]:left-[2rem] max-[400px]:top-[5rem] max-[400px]:left-[2rem]",
    border: "border-primary-blue-500",
  },
  {
    name: "scissors",
    image: Scissors,
    position:
      "right-0 top-0 max-[640px]:top-[2rem] max-[640px]:right-[2rem] max-[400px]:top-[5rem] max-[400px]:right-[2rem]",
    border: "border-primary-gold-500",
  },
  {
    name: "rock",
    image: Rock,
    position:
      "bottom-0 left-1/2 -translate-x-1/2 max-[640px]:bottom-[2rem] max-[640px]:left-1/2 max-[400px]:bottom-[7rem] max-[400px]:left-1/2",
    border: "border-primary-red-600",
  },
  {
    name: "lizard",
    image: Lizard,
    position:
      "bottom-0 left-1/2 -translate-x-1/2 max-[640px]:bottom-[2rem] max-[640px]:left-1/2 max-[400px]:bottom-[7rem] max-[400px]:left-1/2",
    border: "border-primary-red-600",
  },
  {
    name: "spock",
    image: Spock,
    position:
      "bottom-0 left-1/2 -translate-x-1/2 max-[640px]:bottom-[2rem] max-[640px]:left-1/2 max-[400px]:bottom-[7rem] max-[400px]:left-1/2",
    border: "border-primary-red-600",
  },
];

function BonusGameBox() {
  const { startGame, playGame } = useBonus();

  return (
    // <section className="flex items-center justify-center triangle bg-no-repeat bg-center min-h-[27rem] relative mt-28 max-w-[60rem] w-full md:max-w-[40rem] md:min-h-[20rem]">
    <section
      onClick={startGame}
      className="triangle bg-no-repeat bg-center relative mt-28 lg:mt-20 mx-auto h-[380px] w-[420px] md:w-[420px] max-sm:mt-10 max-[480px]:w-full"
    >
      {choices.map((choice) => (
        <button
          key={choice.name}
          onClick={() => playGame(choice.name)}
          className={`
            absolute ${choice.position}
            z-10
            h-[120px] w-[120px]
            sm:h-[170px] sm:w-[170px]
            rounded-full
            border-[18px]
            ${choice.border}
            bg-gray-200
            shadow-[0_7px_0_rgba(0,0,0,0.25)]
            transition-transform
            hover:scale-105
            active:scale-95
            max-[400px]:h-[80px] max-[400px]:w-[80px] max-[400px]:border-[12px]
            cursor-pointer
          `}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f4f4f4] shadow-[inset_0_2px_5px_rgba(0,0,0,0.15)]">
            <img
              src={choice.image}
              alt={choice.name}
              className="h-[60px] w-[60px] object-contain sm:h-[70px] sm:w-[70px] max-[400px]:h-[35px] max-[400px]:w-[35px]"
            />
          </div>
        </button>
      ))}
    </section>
  );
}

export default BonusGameBox;
