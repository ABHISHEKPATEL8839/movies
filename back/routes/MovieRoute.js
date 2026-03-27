import express from "express";
import {
 
getMovies,addMovie

} from "../controllers/MovieController.js";

const router = express.Router();

router.post("/add", addMovie);
router.get("/all", getMovies);


export default router;