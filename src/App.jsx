import { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { NavBar } from "./components/NavBar/NavBar";
import NotFound from "./pages/Not Found/NotFound";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
