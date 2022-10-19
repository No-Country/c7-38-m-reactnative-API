//const { User } = require('../Login/models/user');
const Training = require("../Training/models/training");
//const { Progress } = require('../Progress/models/progress')

const getAllTraining = async (req, res, next) => {
  const trainings = await Training.find();
  res.send(trainings);
};
const getTrainigById = async (req, res, next) => {
  const id = req.params;
  const training = await Training.findById(id);
  res.status(200).json({
    status: "success",
    data: { training },
  });
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
  const { status } = req.body;
  const { id } = req.params;
  const training = await Training.Update(id, { status });

  res.status(204).json({
    status: "success",
    data: { training },
  });
};

module.exports = {
  getAllTraining,
  getTrainigById,
  updateTraining,
  createTrainig,
  deleteTrainig,
};
