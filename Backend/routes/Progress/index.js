const router = require("express").Router();

const {
  getAllProgress,
  createProgress,
  getProgressById,
  updateProgress,
  deleteProgress,
} = require("../../controllers/Progress/index");

router.get("/", getAllProgress);
router.post("/", createProgress);
router.get("/:id", getProgressById);
router.patch("/", updateProgress);
router.delete("/:id", deleteProgress);

module.exports = router;
