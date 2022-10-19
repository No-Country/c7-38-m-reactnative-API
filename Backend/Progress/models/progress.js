const mongoose = require("mongoose");
const { Schema } = mongoose;

const progressSchema = new Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  weight: {
    type: Number,
    requiere: true,
    allowNull: false,
  },

  image: {
    type: String,
    require: true,
    allowNull: false,
  },
  date: {
    type: String,
    requiere: true,
  },
  commentProgress: {
    type: String,
    requiere: true,
    allowNull: false,
  },
  status: {
     type: String, 
     default: "active" 
    },
});

module.exports = mongoose.model("Progress", progressSchema);
