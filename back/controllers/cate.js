import Cate from '../models/categery.js'


 const SaveCategory = async (req, res) => {
  const cate = await Category.create(req.body);

  res.send({
    success: true,
    result: cate,
  });
};

 const GetAllCategory = async (req, res) => {
  const cate = await Category.find();

  res.send({
    success: true,
    result: cate,
  });
};
export {SaveCategory,  GetAllCategory};
