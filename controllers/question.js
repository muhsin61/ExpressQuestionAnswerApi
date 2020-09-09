const getAllQuestions = (req, res, next) => {
  res.status(200).json({ name: "All questions page" });
};

//bir çok fonsiyon olabilir.
module.exports = {
  getAllQuestions,
};
