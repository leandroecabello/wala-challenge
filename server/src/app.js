const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const tasksRoutes = require("./routes/tasks.routes");
const app = express();

// Config
app.set("port", process.env.PORT || 4000);

// Middlewares
app
  .use(cors())
  .use(morgan("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

app.use("/api/tasks", tasksRoutes);

module.exports = app;
