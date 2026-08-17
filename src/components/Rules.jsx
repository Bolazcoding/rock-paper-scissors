function Rules({ handleRuleOpen }) {
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
