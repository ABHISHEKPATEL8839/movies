import express from 'express';
import {SaveCategory, UpdateCategory, GetAllCategoryAndSubCate, DeleteCategory, GetAllCategory, GetAllCategoryById,



    
} from '../controllers/cate.js'
let routes = express.Router();

routes.get("/", GetAllCategory);
routes.get("/subcate", GetAllCategoryAndSubCate);
routes.get("/:id", GetAllCategoryById);


routes.post("/", SaveCategory);
routes.put("/:id", UpdateCategory);
routes.delete("/:id", DeleteCategory);

export default routes;