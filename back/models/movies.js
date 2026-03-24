import mongoose from '../config/db.js'

let movieSchema = mongoose.Schema({
    title : String,
    name:String,
    categoryId : { type :  mongoose.Schema.Types.ObjectId, ref : "categery"},
    image : String,
    cast : String,
    Release:Date,
        ott:String
}, {timestamps : true})

let movie = mongoose.model("movie", movieSchema);

export default movie;