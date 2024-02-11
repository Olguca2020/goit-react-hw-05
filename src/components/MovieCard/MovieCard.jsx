import css from "./MovieCard.module.css";
import { Outlet, NavLink } from "react-router-dom";
import clsx from "clsx";

export const MovieCard = ({ card }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const path = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";

  return (
    <>
      <div className={css.cardWrapper}>
        <img
          src={card.poster_path ? `${path}${card.poster_path}` : defaultImg}
          width={250}
          alt="poster"
        />
        <div className={css.cardDetails}>
          <h1>
            {card.original_title}({new Date(card.release_date).getFullYear()})
          </h1>
          <h3>User score</h3>
          <p>{Math.round(card.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{card.overview}</p>
          <h3>Genres </h3>
          <p>{card.genres.map((gen) => gen.name)}</p>
        </div>
      </div>
      <div className={css.addInfoWrapper}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
