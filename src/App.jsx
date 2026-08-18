import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GamesProvider } from "./contexts/GameContext";
import Homepage from "./pages/Homepage";
import { GamesBonusProvider } from "./contexts/GameBonusContext";
import Bonuspage from "./pages/Bonuspage";
import { useState } from "react";

function App() {
  const [handleRuleOpen, sethandleRuleOpen] = useState(false);

  return (
    <main className=" mx-auto overflow-x-hidden">
      <GamesProvider>
        <GamesBonusProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Homepage
                    handleRuleOpen={handleRuleOpen}
                    sethandleRuleOpen={sethandleRuleOpen}
                  />
                }
              />
              <Route
                path="/bonus"
                element={
                  <Bonuspage
                    handleRuleOpen={handleRuleOpen}
                    sethandleRuleOpen={sethandleRuleOpen}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </GamesBonusProvider>
      </GamesProvider>
    </main>
  );
}

export default App;
