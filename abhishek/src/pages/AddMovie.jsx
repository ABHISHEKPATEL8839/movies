import React, { useState } from "react";
import API from "./API";

const AddMovie = () => {
    const [movie, setMovie] = useState({
  title: "",
  image: "",
  cast: "",
  ott: "",
  rating: "",
  releaseDate: ""
});
 

  const handleChange = (e) => {
  const { name, value } = e.target;

  setMovie((prev) => ({
    ...prev,
    [name]: value
  }));
};

  const handleSubmit = async () => {
    await API.post("http://localhost:3000/api/v1/movies/add", {
      ...movie,
      cast: movie.cast?.split(","),
    });

    alert("Movie Added Successfully");
  };

  return (
    <div className="container mt-4">
      <h2>Add Movie</h2>

      <input className="form-control my-2" name="title" placeholder="Title" onChange={handleChange}/>
      <input className="form-control my-2" name="image" placeholder="Image URL" onChange={handleChange}/>
      <input className="form-control my-2" name="cast" placeholder="Cast" onChange={handleChange}/>
      <input className="form-control my-2" name="ott" placeholder="OTT Platform" onChange={handleChange}/>
      <input className="form-control my-2" name="rating" placeholder="Rating" onChange={handleChange}/>
      <input className="form-control my-2" type="date" name="releaseDate" onChange={handleChange}/>

      <button className="btn btn-warning mt-2" onClick={handleSubmit}>
        Add Movie
      </button>
    </div>
  );
};

export default AddMovie;