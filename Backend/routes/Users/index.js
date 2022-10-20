const router = require("express").Router();
const {
  createUser,
  searchUserByEmail,
  updateUser,
  deleteUser,
  getUserById,
} = require("../../controllers/Users/index");
router.get("/:id", getUserById);
router.post("/signIn", createUser);
router.post("/logIn", searchUserByEmail);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
