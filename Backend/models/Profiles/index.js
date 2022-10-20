const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  userName: { type: String, require: true, allowNull: false },
  image: { type: String },
  email: { type: String, require: true, allowNull: false },
  age: {
    type: String,
    require: true,
    allowNull: false,
  },
  phone: {
    type: String,
    require: true,
    allowNull: false,
  },
  weight: {
    type: String,
    require: true,
    allowNull: false,
  },
  objetive: {
    type: String,
    require: true,
    allowNull: false,
  },
  idUser: {
    type: String,
    require: true,
    allowNull: false,
  },
});

module.exports = mongoose.model("Profile", profileSchema);
