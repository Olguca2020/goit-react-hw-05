import css from "./MooviList.module.css";
export const MooviList = ({ movies }) => {
  return (
    <>
      <p className={css.titleList}>Trending today</p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className={css.filmName}>
            <a href={movie.poster_path}>{movie.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
