import Paper from "/images/icon-paper.svg";
import Scissors from "/images/icon-scissors.svg";
import Rock from "/images/icon-rock.svg";
import { useGames } from "../contexts/GameContext";

const choices = [
  {
    name: "paper",
    image: Paper,
    position:
      "left-0 top-0 max-[640px]:top-[2rem] max-[640px]:left-[2rem] max-[400px]:top-[5rem] max-[400px]:left-[2rem]",
    border: "border-blue-500",
  },
  {
    name: "scissors",
    image: Scissors,
    position:
      "right-0 top-0 max-[640px]:top-[2rem] max-[640px]:right-[2rem] max-[400px]:top-[5rem] max-[400px]:right-[2rem]",
    border: "border-yellow-500",
  },
  {
    name: "rock",
    image: Rock,
    position:
      "bottom-0 left-1/2 -translate-x-1/2 max-[640px]:bottom-[2rem] max-[640px]:left-1/2 max-[400px]:bottom-[7rem] max-[400px]:left-1/2",
    border: "border-red-500",
  },
];

function GameBox() {
  const { startGame, playGame } = useGames();

  return (
    // <section className="flex items-center justify-center triangle bg-no-repeat bg-center min-h-[27rem] relative mt-28 max-w-[60rem] w-full md:max-w-[40rem] md:min-h-[20rem]">
    <section
      onClick={startGame}
      className="triangle bg-no-repeat bg-center relative mt-28 lg:mt-20 mx-auto h-[380px] w-[420px] md:w-[420px] max-sm:mt-10 max-[480px]:w-full"
    >
      {/* <div
        className="absolute left-[9rem] h-[24.8rem] w-[25.2rem] cursor-pointer max:w-[13rem] max:h-[13rem] max:left-64 max:top-12 sma:top-6 sma:-left-8"
        // onClick={() => handlePlay(Paper)}
      >
        <img src={Paper} alt="paper" />
        <div className="h-full w-full hover:hover-bg absolute top-[-2.5rem] left-[-2.5rem] sma:hidden"></div>
      </div>
      <div
        className="absolute right-[9rem] h-[24.8rem] w-[25.2rem] cursor-pointer max:w-[13rem] max:h-[13rem] max:right-64 max:top-12  sma:top-6 sma:-right-8 "
        // onClick={() => handlePlay(Scissors)}
      >
        <img src={Scissors} alt="scissors" />
        <div className="h-full w-full hover:hover-bg  absolute  top-[-2.5rem] left-[-2.5rem] sma:hidden"></div>
      </div>
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[24.8rem] w-[25.2rem] cursor-pointer max:w-[13rem] max:h-[13rem] max:bottom-12   sma:bottom-0 sma:left-1/2"
        // onClick={() => handlePlay(Rock)}
      >
        <img src={Rock} alt="rock" />
        <div className="h-full w-full hover:hover-bg absolute  top-[-2.5rem] left-[-2.5rem] sma:hidden"></div>
      </div> */}

      {/* Triangle lines */}
      {/* <div className="absolute left-[100px] top-[76px] z-0 h-[18px] w-[220px] bg-[#162542]" />

      <div className="absolute left-[83px] top-[165px] z-0 h-[18px] w-[220px] rotate-[60deg] bg-[#162542]" />

      <div className="absolute right-[83px] top-[165px] z-0 h-[18px] w-[220px] rotate-[-60deg] bg-[#162542]" /> */}

      {/* Game choices */}
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

export default GameBox;
