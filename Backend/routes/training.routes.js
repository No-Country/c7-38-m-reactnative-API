const express = require('express');

const {
	getAllTraining,
	getTrainigById,
	updateTraining,
	createTrainig,
	deleteTrainig
} = require('../controllers/Training.controller');


const trainingRoutes = express.Router();

trainingRoutes.get( '/', getAllTraining );
trainingRoutes.post( '/', createTrainig );
trainingRoutes.get( '/:id', getTrainigById );
trainingRoutes.patch('/:id',updateTraining)
trainingRoutes.delete( '/:id', deleteTrainig );

module.exports = { trainingRoutes}