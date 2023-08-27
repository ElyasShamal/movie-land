import React, { useEffect, useState } from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const Url = "https://www.omdbapi.com/?i=tt3896198&apikey=2864abde";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getMovies = async (title) => {
    const response = await fetch(`${Url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovies("Batman");
  }, []);
  return (
    <>
      <div className="app">
        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => getMovies(searchTerm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container-Two">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default Movie;
