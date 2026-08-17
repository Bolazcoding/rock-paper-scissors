import Rules from "./Rules";
import ToggleGame from "./ToggleGame";

function Footer({ handleRuleOpen }) {
  return (
    <footer className="flex items-center justify-between w-full px-12">
      <ToggleGame />
      <Rules handleRuleOpen={handleRuleOpen} />
    </footer>
  );
}

export default Footer;
