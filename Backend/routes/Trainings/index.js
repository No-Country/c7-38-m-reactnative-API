const router = require("express").Router();

const {
  getTrainigById,
  updateTraining,
  createTrainig,
  deleteTrainig,
} = require("../../controllers/Trainings/index");

router.post("/", createTrainig);
router.get("/:id", getTrainigById);
router.patch("/", updateTraining);
router.delete("/:id", deleteTrainig);

module.exports = router;
