import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "../About/About";
import Movie from "../Movie/Movie";

const Header = () => {
  return (
    <Router>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Movie">Movies</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Movie" element={<Movie />} />
      </Routes>
    </Router>
  );
};

export default Header;
