import Close from "/images/icon-close.svg";
import Rules from "/images/image-rules.svg";
import RulesBonus from "/images/image-rules-bonus.svg";

function RulesContainer({ handleRuleClose }) {
  const isBonus = location.pathname === "/bonus";

  return (
    <div className="fixed inset-0 z-20">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={handleRuleClose}
      ></div>

      <div className="relative flex h-full w-full items-center justify-center md:p-4">
        <div className="relative flex h-full w-full flex-col bg-white md:h-auto md:w-[28.5rem] md:rounded-[1rem] md:shadow-[0_0_0_1px_rgba(15,23,42,0.04)]">
          <header className="relative flex items-center justify-center px-6 pt-8 md:justify-between md:px-8">
            <h2 className="text-[2.4rem] font-bold uppercase leading-none tracking-[-0.05em] text-[#2b3757] md:text-[2rem]">
              Rules
            </h2>

            <button
              type="button"
              aria-label="Close rules"
              onClick={handleRuleClose}
              className="hidden cursor-pointer md:block"
            >
              <img src={Close} alt="close" className="h-5 w-5" />
            </button>
          </header>

          <div className="flex flex-1 items-center justify-center px-6 py-8 md:px-4 md:pb-8 md:pt-10">
            <img
              src={isBonus ? RulesBonus : Rules}
              alt={isBonus ? "rules bonus" : "rules"}
              className="mx-auto w-full max-w-[17.5rem] md:max-w-[21rem]"
            />
          </div>

          <button
            type="button"
            aria-label="Close rules"
            onClick={handleRuleClose}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
          >
            <img src={Close} alt="close" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RulesContainer;
