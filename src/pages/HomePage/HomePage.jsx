import { MooviList } from "../../components/MooviList/MooviList";
import { getTrendMovies } from "../../film-api";
import { useEffect, useState } from "react";
import { MyLoader } from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loadind, setLoading] = useState(false);
  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setLoading(true);
        const response = await getTrendMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trend movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <>
      {loadind && <MyLoader />}
      {movies.length > 0 && <MooviList movies={movies} />}
    </>
  );
};
export default HomePage;
