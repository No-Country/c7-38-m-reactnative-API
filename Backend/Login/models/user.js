const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, requiere: true },
  password: { type: String, requiere: true },
  name: { type: String, requiere: true },
  status: { type: String, default: "active" },
});
const User = mongoose.model('users',userSchema)

module.exports = User;
