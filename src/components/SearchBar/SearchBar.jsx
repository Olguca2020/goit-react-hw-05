import css from "./SearchBar.module.css";
export const SearchBar = () => {
  const handleForm = (ev) => {
    ev.preventDefault();
    console.log(ev);
  };
  return (
    <form onSubmit={handleForm} className={css.searchForm}>
      <input name="query" type="text" autoComplete="off" autoFocus />
      <button type="submit">Search</button>
    </form>
  );
};
