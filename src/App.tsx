import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages.tsx/HomePage";
import AboutPage from "./pages.tsx/AboutPage";
import PokemonDetailPage from "./pages.tsx/PokemonDetailPage";
import LoadPokemons from "./components/load";

function App() {
  return (
    <div className="App">
      <div className="background-image">
        <div className="Navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">AboutPage</NavLink>
          <NavLink to="/discover">PokemonDiscoverPage</NavLink>
        </div>
        <div className="container-app">
          <Routes>
            <Route path="/discover" element={<LoadPokemons />}>
              <Route path=":filter" element={<LoadPokemons />} />
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
            <Route
              path="/details/:pokemon_name"
              element={<PokemonDetailPage />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
