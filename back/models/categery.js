import mongoose from "../config/db.js";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

let Cate = mongoose.model('Category', categorySchema);
export default Cate;