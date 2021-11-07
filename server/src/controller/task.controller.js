const Task = require("../models/task");
const { getAllTasks, addTask, deleteTask } = require("../service/task.service");
const taskController = {};

taskController.getAllTasks = async (req, res) => {
  try {
    const tasks = await getAllTasks();
    res.status(200).json({ message: "Tasks is displayed successfully", tasks });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

taskController.createTask = async (req, res) => {
  try {
    const task = await addTask(req.body);
    res.status(201).json({ message: "Task created successfully", task });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

taskController.updateTask = async (req, res) => {
  try {
    // const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body)
    const task = await updateTask(req.params.id, req.body);
    res.status(200).json({ message: "Task updated successfully", task });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

taskController.deleteTask = async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id);
    const task = await deleteTask(req.params.id);
    res.status(200).json({ message: "Task deleted successfully", task });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = taskController;
