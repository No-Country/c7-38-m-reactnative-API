const express = require("express");
const app = express();

//Routers
const trainingRoutes = require("./routes/Trainings/index");
const usersRouter = require("./routes/Users/index");
const profilesRouter = require("./routes/Profiles/index");
const progressRouter = require("./routes/Progress/index");

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

module.exports = app;
