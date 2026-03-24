import express from 'express'
import {getRatings,addRating} from '../controllers/Rating.js'
const router = express.Router();
router.post("/add", addRating);

router.get("/", getRatings);

export default router