const express = require("express");

const {
  createProfile,
  deleteProfile,
  getProfileById,
  updateProfile,
} = require("../controllers/profile.controller");

const profilesRouter = express.Router();

profilesRouter.post("/", createProfile);
profilesRouter.get("/:id", getProfileById);
profilesRouter.patch("/:id", updateProfile);
profilesRouter.delete("/:id", deleteProfile);

module.exports = { profilesRouter };
