import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "../About/About";
import Movie from "../Movie/Movie";

const Header = () => {
  return (
    <>
      <Router>
        <nav className="Nav">
          <ul className="list">
            <li className="list-items">
              <Link to="/About" className="Link">
                About
              </Link>
            </li>
            <li className="list-items">
              <Link to="/Movie" className="Link">
                Movies
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Movie" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
