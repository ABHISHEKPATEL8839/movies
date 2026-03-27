import React, { useEffect, useState } from "react";
import API from "./API";
import MovieCard from "./MovieCard";
import Hero from "./Hero";

const Home = () => {
  const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     API.get("http://localhost:3000/api/v1/movies/all").then((res) => setMovies(res.data));
//   }, []);
useEffect(() => {
  API.get("http://localhost:3000/api/v1/movies/all")
    .then((res) => {
      console.log(res.data); // 👈 DEBUG

      setMovies(res.data.result || []); // ✅ SAFE
    })
    .catch((err) => {
      console.error(err);
      setMovies([]); // fallback
    });
}, []);
  return (
    <>
      <Hero />

      <div className="container mt-4">
        <h3 className="mb-4">🔥 Trending Movies</h3>

        <div className="row">
          {movies.map((m) => (
            <MovieCard key={m._id} movie={m} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;