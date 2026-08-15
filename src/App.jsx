import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GamesProvider } from "./contexts/GameContext";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <main className=" mx-auto overflow-x-hidden">
      <GamesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </GamesProvider>
    </main>
  );
}

export default App;
