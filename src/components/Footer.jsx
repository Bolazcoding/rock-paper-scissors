import Rules from "./Rules";
import ToggleGame from "./ToggleGame";

function Footer({ handleRuleOpen }) {
  return (
    <footer className="flex w-full items-center justify-between gap-3 mt-12 px-2 sm:px-6 md:px-8 lg:px-12">
      <ToggleGame />
      <Rules handleRuleOpen={handleRuleOpen} />
    </footer>
  );
}

export default Footer;
