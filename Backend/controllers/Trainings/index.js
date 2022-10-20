const Training = require("../../models/Trainings/index");

const getTrainigById = async (req, res, next) => {
  const { id } = req.params;
  const training = await Training.findOne({ idUser: id });
  res.send(training);
};

const createTrainig = async (req, res) => {
  const { nameTraining, category, days, hours, date, idUser } = req.body;
  const newTraining = await Training.create({
    nameTraining,
    category,
    days,
    hours,
    date,
    idUser,
  });

  res.send(newTraining);
};

const updateTraining = async (req, res) => {
  const { nameTraining, category, days, hours, date, idUser } = req.body;
  const training = await Training.findOneAndUpdate(
    { idUser },
    {
      nameTraining,
      category,
      days,
      hours,
      date,
      idUser,
    }
  );

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
