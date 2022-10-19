const express = require("express");

//Routers
const { trainingRoutes } = require("./routes/training.routes");
const { usersRouter } = require("./routes/user.routes.js");
const { profilesRouter } = require("./routes/profile.routes");
const { progressRouter } = require("./routes/progress.routes.js");

const app = express();

app.use(express.json());

//define  endpoints
app.use("/api/v1/training", trainingRoutes);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/profiles", profilesRouter);
app.use("/api/v1/progress", progressRouter);

// catch non-existing endpoints
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: `${req.method} ${req.url}does not exist in our server`,
  });
});

module.exports = { app };
