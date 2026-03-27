import mongoose from '../config/db.js'



const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    cast: [
      {
        type: String,
      },
    ],
    ott: {
      type: String,
    },
    releaseDate: {
      type: Date,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);


let movie = mongoose.model("movie", movieSchema);

export default movie;