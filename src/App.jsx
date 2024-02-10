import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { NavBar } from "./components/NavBar/NavBar";
import NotFound from "./pages/Not Found/NotFound";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./pages/MovieCast/MovieCast";
import MovieReviews from "./pages/MovieReviews/MovieReviews";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId;" element={<MovieDetailsPage />} />
        <Route path="/movies/:movieId/cast;" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews;" element={<MovieReviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
