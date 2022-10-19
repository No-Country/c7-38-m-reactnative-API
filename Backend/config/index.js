require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
  })
  .then((db) => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));
