import GameBox from "../components/GameBox";
import Header from "../components/Header";
import RulesContainer from "../components/RulesContainer";
import ChooseBoxes from "../components/ChooseBoxes";
import { useGames } from "../contexts/GameContext";
import Footer from "../components/Footer";

function Homepage({ handleRuleOpen, sethandleRuleOpen }) {
  const { gameStage } = useGames();

  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-8 sm:px-24 md:px-40 lg:px-56 xl:px-80 2xl:px-84">
      <Header />
      {gameStage === "start" && <GameBox />}
      {gameStage === "choosing" && <ChooseBoxes />}
      <Footer handleRuleOpen={() => sethandleRuleOpen(true)} />
      {handleRuleOpen && (
        <RulesContainer handleRuleClose={() => sethandleRuleOpen(false)} />
      )}
    </div>
  );
}

export default Homepage;
