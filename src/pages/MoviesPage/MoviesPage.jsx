import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import { MooviList } from "../../components/MooviList/MooviList";
import { getMovieByQuery } from "../../film-api";
import { useSearchParams } from "react-router-dom";

export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query) {
      const response = await getMovieByQuery(query);
      setSearchResults(response.data.results);
      setSearchParams({
        query: encodeURIComponent(query),
      });
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const initialQuery = searchParams.get("query");
    if (initialQuery) {
      handleSearch(encodeURIComponent(initialQuery));
    }
  }, []);
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchQuery && <MooviList movies={searchResults} />}
    </div>
  );
};
