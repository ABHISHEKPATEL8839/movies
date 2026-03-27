import express from 'express';
import categery from './RatingRoute.js'
import movies from './MovieRoute.js';
import Rating from './RatingRoute.js';


let routes = express.Router();

routes.use("/api/v1/category", categery);
routes.use("/api/v1/movies", movies);
routes.use("/api/v1/Rating", Rating);


export default routes;