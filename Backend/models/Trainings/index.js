const mongoose = require("mongoose");
const { Schema } = mongoose;

const trainingSchema = new Schema({
  nameTraining: {
    type: String,
    requiere: true,
    allowNull: false,
  },

  category: {
    type: String,
    requiere: true,
    allowNull: false,
  },

  days: { type: Array, requiere: true },

  hours: {
    hourStart: {
      type: String,
      requiere: true,
    },

    hourEnd: {
      type: String,
      requiere: true,
    },
  },

  date: {
    dateStart: {
      type: String,
      requiere: true,
    },

    dateEnd: {
      type: String,
      requiere: true,
    },
  },

  idUser: {
    type: String,
    require: true,
    allowNull: false,
  },
});

module.exports = mongoose.model("training", trainingSchema);
