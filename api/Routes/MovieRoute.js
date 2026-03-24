import express from "express";
import {
 
deleteMovie,updateMovie,getMovieById,getMovies,addMovie

} from "../controllers/MovieController.js";

const router = express.Router();

router.post("/add", addMovie);
router.get("/", getMovies);
router.get("/:id", getMovieById);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;