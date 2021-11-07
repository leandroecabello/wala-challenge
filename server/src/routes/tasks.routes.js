const { Router } = require("express");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/task.controller");
const router = Router();

router
  .get("/", getAllTasks)
  .post("/", createTask)
  .put("/:id", updateTask)
  .delete("/:id", deleteTask);

module.exports = router;
