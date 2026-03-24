import Cate from '../models/categery.js'
import movie from '../models/movies.js';


let SaveCategory = async(req, res)=>{
    let result = await Cate.create(req.body);
    res.send({success: true, result});
    
}
let GetAllCategory = async(req, res)=>{
    let result = await Cate.find();
    res.send({success: true, result});
}



let GetAllCategoryById = async(req, res)=>{
    let id = req.params.id;
    let result = await Cate.find({_id : id });
    res.send({success: true, result : result[0]});
}
let UpdateCategory = async(req, res)=>{
    let id = req.params.id;
    let result = await Cate.updateMany({_id : id }, req.body);
    res.send({success: true, result});
}
let DeleteCategory = async(req, res)=>{
    let id = req.params.id;
    await movie.deleteMany({categoryId : id});

    let result = await Cate.deleteMany({_id : id});
    res.send({success: true, result});
}

export {SaveCategory, UpdateCategory, DeleteCategory, GetAllCategory, GetAllCategoryById};
