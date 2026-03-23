const express = require("express");
const router = express.Router();

const {
  addRating,
  getAverageRating,
  getRatingsByMovie
} = require("../controllers/ratingController");

// Routes
router.post("/add", addRating);
router.get("/average/:movieId", getAverageRating);
router.get("/:movieId", getRatingsByMovie);

export default router