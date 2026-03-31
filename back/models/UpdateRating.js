const updateRating = async (req, res) => {
  try {
    const { rating } = req.body;

    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { rating },
      { new: true }
    );

    res.send({ success: true, result: movie });
  } catch (err) {
    res.send({ success: false, err });
  }
};
export default updateRating