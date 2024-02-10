import { MooviList } from "../../components/MooviList/MooviList";
import { getTrendMovies } from "../../film-api";
import { useEffect, useState } from "react";
import { MyLoader } from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loadind, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setLoading(true);
        const response = await getTrendMovies();
        setMovies(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <>
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {loadind && <MyLoader />}
      {movies.length > 0 && <MooviList movies={movies} />}
    </>
  );
};
export default HomePage;
