require("dotenv").config();
const { app } = require("./app");
require("./Config/config");

const startServer = async () => {
  try {
    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log("server runnig");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
