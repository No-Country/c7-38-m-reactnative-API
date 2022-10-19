const express = require("express");

const {
  createUser,
  searchUserByEmail,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

const usersRouter = express.Router();

usersRouter.post("/signIn", createUser);
usersRouter.post("/logIn", searchUserByEmail);
usersRouter.patch("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

module.exports = { usersRouter };
