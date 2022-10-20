const User = require("../../models/Users/index");

const getUserById = async (req, res, next) => {
  const id = req.params;
  const user = await User.findOne({ idUser: id });
  res.send(user);
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

const searchUserByEmail = async (req, res) => {
  const { email, password } = req.body;
  const verify = await User.find({ email: email });
  if (verify[0]) {
    if (verify[0].email && verify[0].password == password) {
      return res.send(verify);
    } else {
      return res.json({ message: "password incorrect" });
    }
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
  getUserById,
  createUser,
  searchUserByEmail,
  updateUser,
  deleteUser,
};
