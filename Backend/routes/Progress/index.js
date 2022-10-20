const router = require("express").Router();

const {
  createProgress,
  getProgressById,
  updateProgress,
  deleteProgress,
} = require("../../controllers/Progress/index");

router.post("/", createProgress);
router.get("/:id", getProgressById);
router.patch("/", updateProgress);
router.delete("/:id", deleteProgress);

module.exports = router;
