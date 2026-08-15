import { useState } from "react";
import GameBox from "../components/GameBox";
import Header from "../components/Header";
import Rules from "../components/Rules";
import RulesContainer from "../components/RulesContainer";

function Homepage() {
  const [handleRuleOpen, sethandleRuleOpen] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-8 sm:px-24 md:px-40 lg:px-56 xl:px-80 2xl:px-84">
      <Header />
      <GameBox />
      <Rules handleRuleOpen={() => sethandleRuleOpen(true)} />
      {handleRuleOpen && (
        <RulesContainer handleRuleClose={() => sethandleRuleOpen(false)} />
      )}
    </div>
  );
}

export default Homepage;
