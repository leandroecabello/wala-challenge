import axios from "axios";

const API_URL = "http://localhost:4000/api/tasks";

export function getTasks() {
  return axios.get(API_URL);
}

export function addTask(task) {
  return axios.post(API_URL, task);
}

export function updateTask(id, task) {
  return axios.put(`${API_URL}/${id}`, task);
}

export function deleteTask(id) {
  return axios.delete(`${API_URL}/${id}`);
}
