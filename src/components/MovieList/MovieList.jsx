import React from "react";
import { NavLink } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <NavLink to={`/${movie.id}`}>{movie.title}</NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
