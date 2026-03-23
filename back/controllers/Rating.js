import Rating from "../models/Rating";

// ➤ Add or Update Rating
let addRating = async (req, res) => {
  try {
    const { movieId, userId, rating, review } = req.body;

    const existing = await Rating.findOne({ movieId, userId });

    if (existing) {
      existing.rating = rating;
      existing.review = review;
      await existing.save();

      return res.status(200).json({
        success: true,
        message: "Rating updated",
        data: existing
      });
    }

    const newRating = new Rating({
      movieId,
      userId,
      rating,
      review
    });

    await newRating.save();

    res.status(201).json({
      success: true,
      message: "Rating added",
      data: newRating
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
};

// ➤ Get Average Rating
let getAverageRating = async (req, res) => {
  try {
    const movieId = req.params.movieId;

    const result = await Rating.aggregate([
      { $match: { movieId: movieId } },
      {
        $group: {
          _id: "$movieId",
          avgRating: { $avg: "$rating" },
          totalRatings: { $sum: 1 }
        }
      }
    ]);

    if (result.length === 0) {
      return res.json({
        avgRating: 0,
        totalRatings: 0
      });
    }

    res.json(result[0]);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching average rating",
      error: error.message
    });
  }
};

// ➤ Get All Ratings
let getRatingsByMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;

    const ratings = await Rating.find({ movieId });

    res.status(200).json({
      success: true,
      count: ratings.length,
      data: ratings
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching ratings",
      error: error.message
    });
  }
};
export {getAverageRating,getRatingsByMovie,addRating}