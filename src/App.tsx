import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages.tsx/HomePage";
import AboutPage from "./pages.tsx/AboutPage";

import LoadPokemons from "./components/load";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">AboutPage</NavLink>
        <NavLink to="/discover">PokemonDiscoverPage</NavLink>
      </div>

      <Routes>
        <Route path="/discover" element={<LoadPokemons />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:pokemon_name" element={<LoadPokemons />} />
      </Routes>
    </div>
  );
}

export default App;
