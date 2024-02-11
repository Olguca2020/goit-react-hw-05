import css from "./MooviList.module.css";
import { Link } from "react-router-dom";

export const MooviList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} className={css.filmName}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
