//const { User } = require('../Login/models/user');
const Training = require("../Training/models/training");
//const { Progress } = require('../Progress/models/progress')

const getTrainigById = async (req, res, next) => {
  const id = req.params;
  const training = await Training.findById(id);
  res.send(training);
};

const createTrainig = async (req, res) => {
  const { nameTraining, category, days, hours, date } = req.body;
  const newTraining = await Training.create({
    nameTraining,
    category,
    days,
    hours,
    date,
  });

  res.send(newTraining);
};

const updateTraining = async (req, res) => {
  const { nameTraining, category, days, hours, date } = req.body;
  const { id } = req.params;

  const training = await Training.findByIdAndUpdate(id, {
    nameTraining,
    category,
    days,
    hours,
    date,
  });

  res.send({ data: training });
};

const deleteTrainig = async (req, res, next) => {
  const { id } = req.params;
  const training = await Training.findByIdAndDelete(id);
  res.send(training);
};

module.exports = {
  getTrainigById,
  updateTraining,
  createTrainig,
  deleteTrainig,
};
