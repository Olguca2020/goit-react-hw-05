import { getCreditsMovie } from "../../film-api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyLoader } from "../../components/Loader/Loader";
import { CastCard } from "../CastCard/CastCard";

const MovieCast = () => {
  const { movieId } = useParams();
  const [loadind, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getCreditsMovie(movieId);
        setCast(response.data.cast);
        console.dir(response.data.cast);
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
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {loadind && <MyLoader />}
      {cast && <CastCard cast={cast} />}
    </>
  );
};
export default MovieCast;
