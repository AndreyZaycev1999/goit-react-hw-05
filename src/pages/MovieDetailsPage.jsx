import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    async function fetchMovieDetailsById() {
      try {
        const response = await fetch();
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovieDetailsById();
  }, [movieId]);
  return (
    <div>
      <h1>productDetails: {movieId}</h1>
      <div>
        <img src="" alt="" />
        <div>"Title"</div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
