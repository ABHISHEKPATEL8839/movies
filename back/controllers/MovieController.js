import Movie from "../models/movies.js";

// ➤ Add Movie
 const addMovie = async (req, res) => {
  try {
    const { title, categoryId, subcategoryId, OTT, image, detail } = req.body;

    const newMovie = new Movie({
      title,
      categoryId,
      subcategoryId,
      OTT,
      image,
      detail
    });

    await newMovie.save();

    res.status(201).json({
      success: true,
      message: "Movie added successfully",
      data: newMovie
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding movie",
      error: error.message
    });
  }
};



// ➤ Get All Movies
 const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
      .populate("categoryId")
      .populate("subcategoryId");

    res.status(200).json({
      success: true,
      count: movies.length,
      data: movies
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching movies",
      error: error.message
    });
  }
};



// ➤ Get Single Movie
 const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
      .populate("categoryId")
      .populate("subcategoryId");

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found"
      });
    }

    res.json({
      success: true,
      data: movie
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching movie",
      error: error.message
    });
  }
};



// ➤ Update Movie
 const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Movie updated",
      data: updatedMovie
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating movie",
      error: error.message
    });
  }
};



// ➤ Delete Movie
 const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Movie deleted"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting movie",
      error: error.message
    });
  }
};
export {deleteMovie,updateMovie,getMovieById,getMovies,addMovie}