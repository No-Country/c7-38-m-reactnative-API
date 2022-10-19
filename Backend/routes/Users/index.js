const router = require("express").Router();
const {
  createUser,
  searchUserByEmail,
  updateUser,
  deleteUser,
} = require("../../controllers/Users/index");

router.post("/signIn", createUser);
router.post("/logIn", searchUserByEmail);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
