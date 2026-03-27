import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark px-4">
      <h4 className="text-warning">🎬 IMDb Clone</h4>

      <div>
        <Link to="/" className="btn btn-outline-light me-2">Home</Link>
        <Link to="/add" className="btn btn-warning">Add Movie</Link>
      </div>
    </nav>
  );
};

export default Navbar;