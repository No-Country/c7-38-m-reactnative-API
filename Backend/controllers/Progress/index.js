const Progress = require("../../models/Progress/index");

const getAllProgress = async (req, res, next) => {
  const progress = await Progress.find();
  res.send(progress);
};

const createProgress = async (req, res, next) => {
  const { date, description, weight, image } = req.body;
  const newProgress = await Progress.create({
    progress: [{ date, description, weight, image }],
  });
  res.send(newProgress);
};

const getProgressById = async (req, res, next) => {
  const id = req.params.id;
  const progress = await Progress.findById(id);
  res.send(progress);
};

const updateProgress = async (req, res, next) => {
  const { date, description, weight, image } = req.body;
  const id = req.params.id;
  const oldProgress = await Progress.findById(id);
  console.log(oldProgress);
  const progress = await Progress.findByIdAndUpdate(id, {
    progress: [...oldProgress.progress, { date, description, weight, image }],
  });

  res.send(progress);
};

const deleteProgress = async (req, res, next) => {
  const { status } = req.body;
  const id = req.params.id;
  const progress = await Progress.findByIdAndUpdate(id, { status });
  res.send(progress);
};

module.exports = {
  getAllProgress,
  createProgress,
  getProgressById,
  updateProgress,
  deleteProgress,
};