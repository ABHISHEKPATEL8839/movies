import express from 'express'
import CategoryRoutes from './CategoryRoutes.js'
import SubCategoryRoutes from './SubCategoryRoutes.js'
import movies from './MovieRoute.js';
import Rating from './ratingRouter.js';


let routes = express.Router();

routes.use("/api/v1/category", CategoryRoutes);
routes.use("/api/v1/subcategory", SubCategoryRoutes);
routes.use("/api/v1/movies", movies);
routes.use("/api/v1/Rating", Rating);


export default routes;