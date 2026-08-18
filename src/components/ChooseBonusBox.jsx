function ChooseBonusBox({ heading, type, isWinner, palette }) {
  const outer = palette?.outer ?? "bg-[#f3f3f3]";
  const shadow = palette?.shadow ?? "shadow-[0_10px_0_rgba(120,120,130,0.9)]";

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
      <h2 className="text-[1rem] font-bold uppercase tracking-[0.14rem] text-white md:text-[1.2rem] lg:text-[1.6rem] lg:font-bold lg:tracking-[0.28rem]">
        {heading}
      </h2>

      <div className="relative flex items-center justify-center h-[12rem] w-[12rem] lg:h-[18rem] lg:w-[18rem]">
        {isWinner && (
          <>
            <div className="absolute inset-[-1.1rem] rounded-full bg-white/3 sm:inset-[-0.5rem] md:inset-[-1rem]" />
            <div className="absolute inset-[-2.2rem] rounded-full bg-white/2 sm:inset-[-2.3rem] md:inset-[-4.8rem]" />
            <div className="absolute inset-[-3.3rem] rounded-full bg-white/1 sm:inset-[-4.5rem] md:inset-[-8.9rem]" />
          </>
        )}

        <div
          className={`relative flex h-[9rem] w-[9rem] items-center justify-center rounded-full ${outer} ${shadow} sm:h-[9rem] sm:w-[9rem] lg:h-[14rem] lg:w-[14rem]`}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f3f3f3] shadow-[inset_0_8px_0_rgba(0,0,0,0.08)]">
            <img
              src={type}
              alt={heading}
              className="h-[4.2rem] w-[4.2rem] object-contain sm:h-[4.2rem] sm:w-[4.2rem] lg:h-[6.4rem] lg:w-[6.4rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseBonusBox;
