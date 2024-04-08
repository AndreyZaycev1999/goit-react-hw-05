import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import clsx from "clsx";

import { useMovieSearch } from "./hooks/useMovieSearch";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import css from "./app.module.css";

// Підсвічування активного пункту меню
const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

function App() {
  const { movies, isLoading, isError, setQuery, setMovies } = useMovieSearch();

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getNavLinkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/movies-page">
            MoviesPage
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/:movieId" element={<MovieDetailsPage />} />
        <Route path="/movies-page" element={<MoviesPage />} />
        <Route path="/movies-page/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
