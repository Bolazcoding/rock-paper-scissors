import { Link, useLocation } from "react-router-dom";
import { useBonus } from "../contexts/GameBonusContext";
import { useGames } from "../contexts/GameContext";

function ToggleGame() {
  const { resetGame } = useGames();
  const { resetBonusGame } = useBonus();
  const location = useLocation();

  const bonusGame = location.pathname === "/bonus";

  function toggleGame() {
    if (bonusGame) {
      resetGame();
    } else {
      resetBonusGame();
    }
  }

  return (
    <Link
      className="flex w-auto items-center justify-center border border-solid border-white rounded-[0.8rem] text-white text-[1rem] font-semibold tracking-[0.15rem] uppercase py-3 px-4 mt-auto self-start transition-all duration-300 hover:bg-white hover:text-neutral-gray-600-header-outline sm:text-[1.3rem] sm:tracking-[0.2rem] sm:px-6 sm:py-4 md:text-[1.6rem] md:tracking-[0.25rem] md:px-8 md:py-5"
      to={bonusGame ? "/" : "/bonus"}
      onClick={toggleGame}
    >
      {bonusGame ? "Home" : "Bonus"}
    </Link>
  );
}

export default ToggleGame;
