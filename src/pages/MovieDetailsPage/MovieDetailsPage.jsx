import { useParams, Link } from "react-router-dom";
import { GoBack } from "../../components/GoBack/GoBack";
import { getMovieById } from "../../film-api";
import { useEffect, useState } from "react";
import { MyLoader } from "../../components/Loader/Loader";
import { MovieCard } from "../../components/MovieCard/MovieCard";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [loadind, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getMovieById(movieId);
        setMovie(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <>
      <Link to="/home">{<GoBack />}</Link>
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {loadind && <MyLoader />}
      {movie && <MovieCard card={movie} />}
    </>
  );
}
