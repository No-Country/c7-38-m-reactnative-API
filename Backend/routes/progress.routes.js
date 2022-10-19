const  express = require('express');


const {

  getAllProgress,
  createProgress,
  getProgressById,
  updateProgress,
  deleteProgress,

} = require('../controllers/Progress.controller')

const progressRouter = express.Router()

progressRouter.get("/",  getAllProgress);
progressRouter.post("/",  createProgress);
progressRouter.get("/:id", getProgressById);
progressRouter.patch("/:id", updateProgress);
progressRouter.delete("/:id", deleteProgress);



module.exports = {progressRouter}


