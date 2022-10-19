const Progress = require("../Progress/models/progress")

const getAllProgress = async (req, res, next) => {
  const progress = await Progress.find();

  res.status(200).json({
    status: "success",
    data: { progress },
  });
};

const createProgress = async (req, res, next) => {
  const { date, commentProgress, weight } = req.body;

  const newProgress = await Progress.create({
    date,
    commentProgress,
    weight,
  });

  res.status(201).json({
    status: "success",
    data: { newProgress },
  });
};

const getProgressById = async (req, res, next) => {
  const id = req.params.id;
  const progress = await Progress.findById(id);
  res.status(200).json({
    status: "success",
    data: { progress },
  });
};

const updateProgress = async (req, res, next) => {
  const { image, commentProgress} = req.body;
  const id = req.params.id;
  const progress = await Progress.findByIdAndUpdate(id, { image: image, commentProgress: commentProgress });

  res.status(204).json({ status: "success", data: { progress } });
};

const deleteProgress = async (req, res, next) => {
  const { status } = req.body;
  const id = req.params.id;
  const progress = await Progress.findByIdAndUpdate(id, { status });
  res.status(204).json({ status: "success", data: { progress } });
};

module.exports = {
  getAllProgress,
  createProgress,
  getProgressById,
  updateProgress,
  deleteProgress,
};
