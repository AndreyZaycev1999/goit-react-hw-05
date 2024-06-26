import css from "./MovieDetailsInfo.module.css";

const MovieDetalsInfo = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  const defaultImage =
    "https://via.placeholder.com/250x375.png?text=Image+Not+Found";

  return (
    <div className={css.movieDetailsInfo}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImage
        }
        alt={title}
        width={400}
      />
      <div className={css.info}>
        <h1>{`${title} (${release_date.split("-")[0]})`}</h1>
        <h4>{`User Store: ${Math.round(vote_average * 10)}%`}</h4>
        <h2>Owerview</h2>
        <p>{overview}</p>
        {genres && genres.length > 0 && (
          <>
            <h3>Genres</h3>
            <p>
              {genres.map((genre, idx) => (
                <span key={idx}>{genre.name}</span>
              ))}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetalsInfo;
