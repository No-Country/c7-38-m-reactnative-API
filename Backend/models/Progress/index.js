const mongoose = require("mongoose");
const { Schema } = mongoose;

const progressSchema = new Schema({
  progress: [
    {
      userId: {
        type: String,
        require: true,
        allowNull: false,
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
      description: {
        type: String,
        requiere: true,
        allowNull: false,
      },
    },
  ],
  idUser: {
    type: String,
    require: true,
    allowNull: false,
  },
});

module.exports = mongoose.model("Progress", progressSchema);
