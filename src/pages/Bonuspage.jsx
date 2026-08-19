import BonusGameBox from "../components/BonusGameBox";
import BonusHeader from "../components/BonusHeader";
import RulesContainer from "../components/RulesContainer";
import ChooseBonusBoxes from "../components/ChooseBonusBoxes";
import Footer from "../components/Footer";
import { useBonus } from "../contexts/GameBonusContext";

function Bonuspage({ handleRuleOpen, sethandleRuleOpen }) {
  const { gameStage } = useBonus();

  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-8 sm:px-24 md:px-40 lg:px-56 xl:px-80 2xl:px-84">
      <BonusHeader />
      {gameStage === "start" && <BonusGameBox />}
      {gameStage === "choosing" && <ChooseBonusBoxes />}
      <Footer handleRuleOpen={() => sethandleRuleOpen(true)} />
      {handleRuleOpen && (
        <RulesContainer handleRuleClose={() => sethandleRuleOpen(false)} />
      )}
    </div>
  );
}

export default Bonuspage;
