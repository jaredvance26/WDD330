import { tasks, updateData} from "./ls.js";
import {  Task } from "./to-do.js"
import { outputData, tasksLeft  } from "./utils.js";

const addTask = document.querySelector("button.add");
const container = document.querySelector("div.tasks");

const allTasks = document.querySelector("div.filters p.all");
const activeFilter = document.querySelector("div.filters p.active");
const completedFilter = document.querySelector("div.filters p.completed");

outputData(tasks,container);
document.querySelector("span.tasks-left").textContent = tasksLeft(tasks);

const getData = () => {
  const inputValue = document.querySelector("input").value;
  const now = new Date();
  const timestamp = now.getTime();

  return new Task(timestamp, inputValue);
};


addTask.onclick = () => {
  const task = getData();
  tasks.push(task);

  updateData(tasks);
  outputData(tasks,container);

  document.querySelector("span.tasks-left").textContent = tasksLeft(tasks);

  document.querySelector("input").value = "";

  allTasks.classList.add('selectedFilter');
  completedFilter.classList.remove('selectedFilter');
  activeFilter.classList.remove('selectedFilter');

};

allTasks.onclick = () => {
	const all = tasks.filter((task) => {
		return !task.deleted;
	  });
	  outputData(all,container);

  allTasks.classList.add('selectedFilter');
  completedFilter.classList.remove('selectedFilter');
  activeFilter.classList.remove('selectedFilter');

};

completedFilter.onclick = () => {
  const completedTasks = tasks.filter((task) => {
    return task.completed && !task.deleted;
  });
  outputData(completedTasks,container);

  completedFilter.classList.add('selectedFilter');
  allTasks.classList.remove('selectedFilter');
  activeFilter.classList.remove('selectedFilter');
};

activeFilter.onclick = () => {
  const activeTasks = tasks.filter((task) => {
    return task.completed && !task.deleted;
  });
  outputData(activeTasks,container);

  activeFilter.classList.add('selectedFilter');
  allTasks.classList.remove('selectedFilter');
  completedFilter.classList.remove('selectedFilter');
};



