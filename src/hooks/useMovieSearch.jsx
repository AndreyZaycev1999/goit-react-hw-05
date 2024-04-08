import { requestMoviesByTrending } from "../services/api";
import { useState, useEffect } from "react";

export const useMovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMoviesByQuery() {
      try {
        setIsLoading(true);
        const data = await requestMoviesByTrending();
        console.log(data.results);
        setMovies(data.results);
        console.log(movies);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMoviesByQuery();
  }, []);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
    newQuery;
  };

  return {
    movies,
    isLoading,
    isError,
    onSetSearchQuery,
  };
};
