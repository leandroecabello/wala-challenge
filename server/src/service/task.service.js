const Task = require("../models/task");
const taskService = {};

taskService.getAllTasks = async () => {
  return await Task.find();
};

taskService.addTask = async body => {
  return await new Task(body).save();
};

taskService.updateTask = async (id, body) => {
  return await Task.findOneAndUpdate({ _id: id }, body);
};

taskService.deleteTask = async id => {
  return await Task.findByIdAndDelete(id);
};

module.exports = taskService;
