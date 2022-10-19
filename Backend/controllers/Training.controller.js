//const { User } = require('../Login/models/user');
const { trainingSchema } = require('../Training/models/training');
//const { Progress } = require('../Progress/models/progress')


const getAllTraining = (async (req, res, next) => {
   
	const trainings = await trainingSchema.findAll({

		where: { status: 'active' },
		//include: [{ model: Progress, include:{ model : User} }],

	});

	res.status(200).json({
		status: 'success',
		data: { trainings },
	});
 })
const getTrainigById = (async (req, res, next) => {
  const id = req.params;
  const training = await trainingSchema.findById(id);
  res.status(200).json({
    status: "success",
    data: { training },
  });
});

const createTrainig = (async (req, res, next) => {
  const { nameTraining, category, days, hours, date } = req.body;

	const newTraining = await trainingSchema.create({
		nameTraining,
		category,
    days,
    hours,
		date,
	});

  res.status(200).json({
    status: "success",
    data: { newTraining },
  });
});

const updateTraining = (async (req, res, next) => {
  const { nameTraining, category } = req.body;
  const { id } = req.params;

  const training = await trainingSchema.Update(id,{
    nameTraining,
    category,
  });

  res.status(204).json({ status: "success", data: { training } });
});

const deleteTrainig = (async (req, res, next) => {
  const { status } = req.body;
  const { id }= req.params;
  const training = await trainingSchema.Update( id,{status,});

  res.status(204).json({
    status: "success",
    data: { training },
  });
});


module.exports = {
  getAllTraining,
  getTrainigById,
  updateTraining,
  createTrainig,
  deleteTrainig,
};
