import { useGames } from "../contexts/GameContext";

function Decision() {
  const { result, resetGame } = useGames();

  const message =
    result === "win"
      ? "YOU WIN"
      : result === "lose"
        ? "YOU LOSE"
        : "IT'S A TIE";

  return (
    <div className="order-3 col-span-full flex flex-col items-center justify-center mt-14 md:order-0 md:col-span-1 md:pt-0">
      <h3 className="text-center text-[3.4rem] font-bold uppercase leading-none tracking-wide text-white md:text-[2.4rem] lg:text-[3.4rem]">
        {message}
      </h3>

      <button
        className="mt-5 rounded-[0.8rem] bg-white px-14 py-4 text-[1.2rem] font-medium uppercase tracking-wide text-primary-purple-700 shadow-[0_8px_0_rgba(255,255,255,0.15)] transition-transform hover:scale-[1.01] sm:px-14 sm:py-2 sm:text-[1.2rem] md:px-24"
        onClick={resetGame}
      >
        Play again
      </button>
    </div>
  );
}

export default Decision;
