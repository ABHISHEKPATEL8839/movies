import Rating from '../models/Rating.js';

 const addRating = async(req, res)=>{
   let data = await Rating.create(req.body);
   res.send({success:true, data});
}

const getRatings = async(req, res)=>{
   let data = await Rating.find()
      .populate('movie')
      .populate('user');

   res.send({success:true, data});
}
export {getRatings,addRating}