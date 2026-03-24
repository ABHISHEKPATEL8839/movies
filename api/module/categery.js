import mongoose from "../config/db.js";

let CateSchema = mongoose.Schema({
    name : String,
}, {timestamps : true})
let Cate = mongoose.model("category", CateSchema);
export default Cate;