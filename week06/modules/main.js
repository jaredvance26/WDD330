// import { tasks, updateData } from "./ls.js";
import { Task } from "./to-do.js";
import { outputData, tasksLeft } from "./utils.js";

const addTask = document.querySelector("button.add");
const container = document.querySelector("div.tasks");

const allTasks = document.querySelector("div.filters p.all");
const activeFilter = document.querySelector("div.filters p.active");
const completedFilter = document.querySelector("div.filters p.completed");

const tasksExist = localStorage.getItem("tasks") !== null;

if (!tasksExist) {
  localStorage.setItem("tasks", JSON.stringify([]));
}

let tasks = JSON.parse(localStorage.getItem("tasks"));
outputData(tasks, container);
document.querySelector("span.tasks-left").textContent = tasksLeft(tasks);

const getData = () => {
  const inputValue = document.querySelector("input").value;
  const now = new Date();
  const timestamp = now.getTime();

  return new Task(timestamp, inputValue);
};

addTask.onclick = () => {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  const task = getData();
  tasks.push(task);

  updateData(tasks);
  outputData(tasks, container);

  document.querySelector("span.tasks-left").textContent = tasksLeft(tasks);

  document.querySelector("input").value = "";

  allTasks.classList.add("selectedFilter");
  completedFilter.classList.remove("selectedFilter");
  activeFilter.classList.remove("selectedFilter");
};

allTasks.onclick = () => {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  outputData(tasks, container);

  allTasks.classList.add("selectedFilter");
  completedFilter.classList.remove("selectedFilter");
  activeFilter.classList.remove("selectedFilter");
};

completedFilter.onclick = () => {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  const completedTasks = tasks.filter((task) => {
    return task.completed;
  });
  outputData(completedTasks, container);

  completedFilter.classList.add("selectedFilter");
  allTasks.classList.remove("selectedFilter");
  activeFilter.classList.remove("selectedFilter");
};

activeFilter.onclick = () => {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  const activeTasks = tasks.filter((task) => {
    return !task.completed;
  });
  outputData(activeTasks, container);

  activeFilter.classList.add("selectedFilter");
  allTasks.classList.remove("selectedFilter");
  completedFilter.classList.remove("selectedFilter");
};

export const updateData = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
