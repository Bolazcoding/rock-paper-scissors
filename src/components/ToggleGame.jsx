import { Link, useNavigate } from "react-router-dom";
import { useBonus } from "../contexts/GameBonusContext";
import { useGames } from "../contexts/GameContext";

function ToggleGame() {
  const { resetGame } = useGames();
  const { resetBonusGame } = useBonus();
  const navigate = useNavigate();

  const bonusGame = location.pathname === "/bonus";

  function toggleGame() {
    if (bonusGame) {
      navigate("/");
      resetBonusGame();
    } else {
      navigate("/bonus");
      resetGame();
    }
  }

  return (
    <Link
      className={`border border-solid border-white rounded-[0.8rem] text-white text-[1.6rem] font-semibold tracking-[0.25rem] uppercase py-5 px-14 mt-auto self-start  hover:bg-score hover:text-grey transition-all duration-300 max:self-center max:mt-20 `}
      to={bonusGame ? "/" : "/bonus"}
      onClick={toggleGame}
    >
      {bonusGame ? "Home" : "Bonus"}
    </Link>
  );
}

export default ToggleGame;
