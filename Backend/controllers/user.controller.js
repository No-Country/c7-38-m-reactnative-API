//const {Profile} = require('../Profile/profile')
const User = require("../Login/models/user");
//const { Training} = require('../Training/models/training')

const getAllUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    data: { users },
  });
};

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
  });

  res.send(newUser);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.send(user);
};

const updateUser = async (req, res, next) => {
  const { name } = req.body;
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  await user.update({ name });
  res.send(user);
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  await User.findById(id);
  res.send(user);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
