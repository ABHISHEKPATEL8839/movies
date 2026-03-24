import mongoose from '../config/db.js'

let movieSchema = mongoose.Schema({
    title : String,
    categoryId : { type :  mongoose.Schema.Types.ObjectId, ref : "category"},
    subcategoryId : {type : mongoose.Schema.Types.ObjectId, ref : "subcategory"},
    OTT : String,
    image : String,
    detail : String,
}, {timestamps : true})

let movie = mongoose.model("movie", movieSchema);

export default movie;