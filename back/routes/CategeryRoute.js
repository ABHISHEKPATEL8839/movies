import express from 'express';
import {SaveCategory,  GetAllCategory} from '../controllers/cate.js'
let routes = express.Router();

routes.get("/all", GetAllCategory);
routes.post("/add", SaveCategory);

export default routes;