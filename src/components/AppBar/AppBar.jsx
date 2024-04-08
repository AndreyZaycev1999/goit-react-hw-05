import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import css from "./AppBar.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <ul className={css.nav}>
          <li>
            <NavLink className={getNavLinkClassName} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassName} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Navigation;
