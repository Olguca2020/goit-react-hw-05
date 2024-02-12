import { Link } from "react-router-dom";
import css from "./GoBack.module.css";

export const GoBack = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <button type="button" className={css.goBack}>
        {children || "Go Back"}
      </button>
      {children}
    </Link>
  );
};
