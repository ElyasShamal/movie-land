import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Movie from "../Movie/Movie";

const Header = () => {
  return (
    <>
      <Router>
        <nav className="Nav">
          <ul className="list">
            <li className="list-items">
              <Link to="/About" className="Link">
                Home
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
          <Route path="/About" element={<Home />} />
          <Route path="/Movie" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
