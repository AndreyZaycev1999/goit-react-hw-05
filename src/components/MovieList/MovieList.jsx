import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ items }) => {
  const defaultImage =
    "https://via.placeholder.com/250x375.png?text=Image+Not+Found";
  const location = useLocation();

  return (
    <ul>
      {items.map(({ poster_path, name, title, id }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {
              <div>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : defaultImage
                  }
                  alt={name || title}
                  width={250}
                  height={375}
                />
                <p>{name || title}</p>
              </div>
            }
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
