import React, { useEffect, useState } from "react";

const Url = "http://www.omdbapi.com/?i=tt3896198&apikey=2864abde";

function Movie() {
  const [movies, setMovies] = useState([]);

  const getMovies = async (title) => {
    const response = await fetch(`${Url}&s=${title}`);
    const data = await response.json();
    setMovies(data);
    console.log(data.Search);
  };

  useEffect(() => {
    getMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1 className="title">Movie Land</h1>
      <div className="search">
        <input type="text" placeholder="Search for movies" />
      </div>
    </div>
  );
}

export default Movie;
