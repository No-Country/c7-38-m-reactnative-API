const router = require("express").Router();
const {
  createProfile,
  deleteProfile,
  getProfileById,
  updateProfile,
} = require("../../controllers/Profiles/index");

router.post("/", createProfile);
router.get("/:id", getProfileById);
router.patch("/", updateProfile);
router.delete("/", deleteProfile);

module.exports = router;
