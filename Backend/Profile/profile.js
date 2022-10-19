const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  profile: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

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
  idealWeight: {
    type: String,
    require: true,
    allowNull: false,
  },
  status: { 
    type: String, 
    default: "active"
  }
});

module.exports = mongoose.model("Profile", profileSchema);
