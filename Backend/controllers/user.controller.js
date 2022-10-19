//const {Profile} = require('../Profile/profile')
const User = require("../Login/models/user");
//const { Training} = require('../Training/models/training')

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
  });

  res.send(newUser);
};

const searchUserByEmail = async (req, res) => {
  const { email, password } = req.body;
  const verify = await User.find({ email: email });
  if (verify[0].email && verify[0].password == password) {
    res.send(verify);
  } else {
    res.json({ message: "user dont exist" });
  }
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
  createUser,
  searchUserByEmail,
  updateUser,
  deleteUser,
};
