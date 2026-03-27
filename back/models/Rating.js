import mongoose from "../config/db.js";


const ratingSchema = new mongoose.Schema({
   movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   rating: {
      type: Number,
      min: 1,
      max: 5
   }
});


const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;