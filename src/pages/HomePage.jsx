import MovieList from "../components/MovieList/MovieList";
import { requestMoviesByTrending } from "../services/api";
import { useMovieSearch } from "../hooks/useMovieSearch";

const HomePage = () => {
  const { movies, ifLoading, isError } = useMovieSearch();

  //   Виклик першого переліку фільмів
  async function fetchMoviesByTranding() {
    requestMoviesByTrending();
    // console.log(data);
  }
  fetchMoviesByTranding();

  return (
    <div>
      <h1>HomePage</h1>
      <MovieList movies={movies} />
      {ifLoading && <Loader />}
      {isError && <Error />}
    </div>
  );
};

export default HomePage;
