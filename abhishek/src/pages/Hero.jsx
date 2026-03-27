import React from "react";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4')",
      }}
    >
      <div>
        <h1 className="display-4 fw-bold">🎬 Movie Hub</h1>
        <p>Discover Top Rated Movies</p>
        <button className="btn btn-warning">Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;