import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <>
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/movies">Home</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
