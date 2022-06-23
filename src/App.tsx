import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages.tsx/HomePage";
import AboutPage from "./pages.tsx/AboutPage";
import DiscoverPage from "./pages.tsx/DiscoverPage";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">AboutPage</NavLink>
        <NavLink to="/discover">DiscoverPage</NavLink>
      </div>
      <Routes>
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
