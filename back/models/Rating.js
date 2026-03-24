import mongoose from "../config/db.js";

const ratingSchema = new mongoose.Schema({
    movieName: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
});

const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;