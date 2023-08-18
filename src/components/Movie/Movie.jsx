import React, { useEffect, useState } from "react";

// api key = 2864abde

function Movie() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section>
      <h1 style={{ textAlign: "center", color: "red" }}>movie page</h1>
    </section>
  );
}

export default Movie;
