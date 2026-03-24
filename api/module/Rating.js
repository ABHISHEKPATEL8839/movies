import mongoose from '../config/db.js';

const ratingSchema = new mongoose.Schema({
    movieId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
    max: 5,
    required: true
},
review: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("Rating", ratingSchema);
export default Rating;