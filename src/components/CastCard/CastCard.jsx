import css from "./CastCard.module.css";
export const CastCard = ({ cast }) => {
  const path = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";
  return (
    <ul className={css.wrapper}>
      {cast.map((actor) => (
        <li key={actor.id} className={css.card}>
          <img
            src={
              actor.profile_path ? `${path}${actor.profile_path}` : defaultImg
            }
            width={250}
            alt="poster"
          />

          <p>{actor.name}</p>
          <p>{actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
