import { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import clsx from "clsx";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

import css from "./app.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const keyAPI =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTE3ODE5MWZmMDg1OTUwYmQzYjIwNGEwYTBlMDg1ZSIsInN1YiI6IjY0MzFjNTk2MWY5OGQxMDFmNjQ1ZTdmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nIjQeklNXlOzeHtmqvE0mK4xxDQeswZbK-RObK94iXU";

function App() {
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
      <nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies-page" element={<MoviesPage />} />
          <Route path="/movie-page/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
