import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyLoader } from "../../components/Loader/Loader";
import { getReviewsMovie } from "../../film-api";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [loadind, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    async function fetchData() {
      if (!movieId) return;
      try {
        setLoading(true);
        const response = await getReviewsMovie(movieId);
        setReviews(response.data.results);
        console.log(response.data.results);
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
      {reviews && reviews.length > 0 ? (
        <ReviewsCard reviews={reviews} />
      ) : (
        <h2>We don`t have any reviews for this movie</h2>
      )}
    </>
  );
};
export default MovieReviews;
