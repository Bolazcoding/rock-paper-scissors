// import { useBonus } from "../Contexts/GameBonusContext";
// import { useGame } from "../Contexts/GameContext";

// import { useState } from "react";

function Rules({ handleRuleOpen }) {
  //   const { dispatch } = useGame();
  //   const { dispatch: bonusDispatch } = useBonus();

  //   function handleRuleOpen() {
  //     if (location.pathname === "/bonus") {
  //       bonusDispatch({ type: "setIsRuleOpened", payload: true });
  //     } else {
  //       dispatch({ type: "setIsRuleOpened", payload: true });
  //     }
  //   }

  return (
    <button
      className="flex items-center justify-center border border-solid border-white rounded-[0.8rem] text-white text-[1.6rem] font-semibold tracking-[0.25rem] uppercase py-5 px-14 hover:bg-white hover:text-neutral-gray-600-header-outline transition-all duration-300 mt-20"
      onClick={handleRuleOpen}
    >
      Rules
    </button>
  );
}

export default Rules;
