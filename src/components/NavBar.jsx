import { NavLink } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <nav>
      <NavLink className="backLink" to="/">
        Movies
      </NavLink>
    </nav>
  );
};
