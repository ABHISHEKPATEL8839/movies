import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="movie-card">
        <img src={movie.image} className="w-100 movie-img" />

        <div className="p-3">
          <h5>{movie.title}</h5>

          <div className="d-flex justify-content-between">
            <span className="rating">⭐ {movie.rating}</span>
            <small>{movie.releaseDate?.slice(0, 10)}</small>
          </div>

          <p className="mt-2 text-muted">{movie.ott}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;