import Paper from "/images/icon-paper.svg";
import Scissors from "/images/icon-scissors.svg";
import Rock from "/images/icon-rock.svg";
import Lizard from "/images/icon-lizard.svg";
import Spock from "/images/icon-spock.svg";
import { useBonus } from "../contexts/GameBonusContext";

const choices = [
  {
    name: "scissors",
    image: Scissors,
    position:
      "left-1/2 top-0 -translate-x-1/2 max-sm:top-10 md:bottom-10 md:top-[-10%]",
    border: "border-primary-gold-500",
    size: "h-[5.2rem] w-[5.2rem] max-[390px]:h-[4.2rem] max-[390px]:w-[4.2rem] sm:h-[7.5rem] sm:w-[7.5rem] md:h-[8.8rem] md:w-[8.8rem]",
  },
  {
    name: "spock",
    image: Spock,
    position: "left-[8%] top-[24%] max-sm:top-[30%] md:left-0",
    border: "border-primary-light-blue-400",
    size: "h-[5.2rem] w-[5.2rem] max-[390px]:h-[4.2rem] max-[390px]:w-[4.2rem] sm:h-[6.9rem] sm:w-[6.9rem] md:h-[8.2rem] md:w-[8.2rem]",
  },
  {
    name: "paper",
    image: Paper,
    position: "right-[8%] top-[24%] max-sm:top-[30%] md:right-0",
    border: "border-primary-blue-500",
    size: "h-[5.2rem] w-[5.2rem] max-[390px]:h-[4.2rem] max-[390px]:w-[4.2rem] sm:h-[6.9rem] sm:w-[6.9rem] md:h-[8.2rem] md:w-[8.2rem]",
  },
  {
    name: "lizard",
    image: Lizard,
    position:
      "left-[18%] bottom-[14%] top-[65%] max-sm:left-[22%] max-sm:[top-[85%] md:bottom-0 md:left-[10%] md:top-[75%]",
    border: "border-primary-purple-600",
    size: "h-[5.2rem] w-[5.2rem] max-[390px]:h-[4.2rem] max-[390px]:w-[4.2rem] sm:h-[6.9rem] sm:w-[6.9rem] md:h-[8.2rem] md:w-[8.2rem]",
  },
  {
    name: "rock",
    image: Rock,
    position:
      "right-[18%] bottom-[14%] top-[65%] max-sm:right-[22%] max-sm:[top-85%] md:bottom-0 md:right-[10%] md:top-[75%]",
    border: "border-primary-red-600",
    size: "h-[5.2rem] w-[5.2rem] max-[390px]:h-[4.2rem] max-[390px]:w-[4.2rem] sm:h-[6.9rem] sm:w-[6.9rem] md:h-[8.2rem] md:w-[8.2rem]",
  },
];

function BonusGameBox() {
  const { startGame, playBonusGame } = useBonus();

  return (
    <section
      onClick={startGame}
      className="pentagon inset-0 bg-center bg-no-repeat relative mt-28 lg:mt-20 mx-auto h-[380px] w-[420px] md:w-[500px] max-sm:mt-10 max-[480px]:w-full"
    >
      {/* <div className="pentagon absolute inset-0 bg-center bg-no-repeat" /> */}

      {choices.map((choice) => (
        <button
          key={choice.name}
          onClick={() => playBonusGame(choice.name)}
          className={`absolute ${choice.position} z-10 ${choice.size} rounded-full border-[0.75rem] ${choice.border} bg-[#f4f4f4] shadow-[0_8px_0_rgba(0,0,0,0.22)] transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer sm:border-[0.9rem] md:border-[1.1rem]`}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f4f4f4] shadow-[inset_0_6px_0_rgba(0,0,0,0.08)]">
            <img
              src={choice.image}
              alt={choice.name}
              className="h-[2.3rem] w-[2.3rem] object-contain max-[390px]:h-[1.8rem] max-[390px]:w-[1.8rem] sm:h-[3.2rem] sm:w-[3.2rem] md:h-[4rem] md:w-[4rem]"
            />
          </div>
        </button>
      ))}
    </section>
  );
}

export default BonusGameBox;
