const Progress = require("../../models/Progress/index");

const createProgress = async (req, res, next) => {
  const { date, description, weight, image, idUser } = req.body;
  const newProgress = await Progress.create({
    progress: [{ date, description, weight, image }],
    idUser,
  });
  res.send(newProgress);
};

const getProgressById = async (req, res, next) => {
  const id = req.params.id;
  const progress = await Progress.findOne({ idUser: id });
  res.send(progress);
};

const updateProgress = async (req, res, next) => {
  const { progress, idUser } = req.body;
  const data = await Progress.findOneAndUpdate(
    { idUser },
    {
      progress,
      idUser,
    }
  );

  res.send(data);
};

const deleteProgress = async (req, res, next) => {
  const { status } = req.body;
  const id = req.params.id;
  const progress = await Progress.findByIdAndUpdate(id, { status });
  res.send(progress);
};

module.exports = {
  createProgress,
  getProgressById,
  updateProgress,
  deleteProgress,
};
