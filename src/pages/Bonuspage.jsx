import { useState } from "react";
import BonusGameBox from "../components/BonusGameBox";
import BonusHeader from "../components/BonusHeader";
import Rules from "../components/Rules";
import RulesContainer from "../components/RulesContainer";
// import ChooseBonusBoxes from "../components/ChooseBonusBoxes";
import { useGames } from "../contexts/GameContext";
import Footer from "../components/Footer";

function Bonuspage({ handleRuleOpen, sethandleRuleOpen }) {
  //   const [handleRuleOpen, sethandleRuleOpen] = useState(false);

  const { gameStage } = useGames();

  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-8 sm:px-24 md:px-40 lg:px-56 xl:px-80 2xl:px-84">
      <BonusHeader />
      {/* {played === "start" && <GameBox onStart={() => setPlayed("play")} />} */}
      {gameStage === "start" && <BonusGameBox />}
      <Footer handleRuleOpen={() => sethandleRuleOpen(true)} />
      {/* {gameStage === "choosing" && <ChooseBoxes />}
      
      <Rules handleRuleOpen={() => sethandleRuleOpen(true)} /> */}
      {handleRuleOpen && (
        <RulesContainer handleRuleClose={() => sethandleRuleOpen(false)} />
      )}
    </div>
  );
}

export default Bonuspage;
