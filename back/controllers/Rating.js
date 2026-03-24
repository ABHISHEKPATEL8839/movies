import ratings from "../models/Rating.js";

let addRating = (req, res) => {
    const { movieName, rating } = req.body;

    ratings.push({ movieName, rating });

    res.send("Rating Added");
};

let getRatings = async (req, res) => {
    const data = await ratings.find();  

    res.send(data);  
};
export {getRatings,addRating}