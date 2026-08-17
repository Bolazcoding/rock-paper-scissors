import { useBonus } from "../contexts/GameBonusContext";

function BonusHeader() {
  const { score } = useBonus();
  return (
    <header className="flex justify-between px-6 border-4 border-neutral-gray-600-header-outline rounded-xl w-full">
      <span className="flex items-center py-6">
        <img
          src="/images/logo-bonus.svg"
          alt="logo"
          className=" h-16 sm:h-24"
        />
      </span>
      <div className="bg-white text-center my-4 py-2.5 px-7 rounded-sm max-sm:py-2 max-sm:px-5">
        <p className="uppercase text-xs text-neutral-blue-700-score-text font-semibold tracking-widest sm:text-lg">
          Score
        </p>
        <h1 className="text-5xl text-neutral-navy-900-dark-text font-bold sm:text-6xl">
          {score}
        </h1>
      </div>
    </header>
  );
}

export default BonusHeader;
