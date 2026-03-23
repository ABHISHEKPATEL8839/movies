import express from 'express';
import {SaveSubCategory, GetAllSubCateByCateId, DeleteAllSubCate, UpdateSubCategory, DeleteSubCategory, GetAllSubCategory, GetAllSubCategoryById} from '../controllers/MovieController.js'
let routes = express.Router();

routes.get("/", GetAllSubCategory);

routes.get("/deleteall", DeleteAllSubCate)

routes.get("/getsubcatebycateid/:id", GetAllSubCateByCateId)

routes.get("/:id", GetAllSubCategoryById);

routes.post("/", SaveSubCategory);
routes.put("/:id", UpdateSubCategory);
routes.delete("/:id", DeleteSubCategory);

export default routes;