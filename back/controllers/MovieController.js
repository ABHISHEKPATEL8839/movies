

import Movie from "../models/Movies.js";



// ➕ Add Movie
 const addMovie = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const movie = await Movie.create(req.body);

    res.send({
      success: true,
      message: "Movie Added",
      result: movie,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error adding movie",
      error,
    });
  }
};


// 📥 Get All Movies
 const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate("category");

    res.send({
      success: true,
      result: movies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error fetching movies",
      error,
    });
  }
};


// 🔍 Get Single Movie
 const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("category");

    res.send({
      success: true,
      result: movie,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error fetching movie",
      error,
    });
  }
};


// ✏️ Update Movie
 const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send({
      success: true,
      message: "Movie Updated",
      result: movie,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error updating movie",
      error,
    });
  }
};


// ❌ Delete Movie
 const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);

    res.send({
      success: true,
      message: "Movie Deleted",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "Error deleting movie",
      error,
    });
  }
};


export {getMovies,addMovie}