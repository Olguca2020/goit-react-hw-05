import { useState } from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleForm = (ev) => {
    ev.preventDefault();

    if (query.trim() === "") {
      toast.error("Enter your query please!");
      return;
    }
    onSearch(query);
    setQuery("");
  };

  const handleInputChange = (ev) => {
    setQuery(ev.target.value);
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleForm} className={css.searchForm}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};
