import { updateData } from "./main.js";

export const tasksLeft = () => {
  const allTasks = JSON.parse(localStorage.getItem("tasks"));
  return allTasks.reduce((acc, task) => {
    if (task.completed === false && task.deleted === false) {
      acc++;
    }
    return acc;
  }, 0);
};

const isTaskCompleted = (task, checkbox, taskContent) => {
  checkbox.textContent = task.completed ? "done" : "check_box_outline_blank";

  task.completed
    ? taskContent.classList.add("completedTask")
    : taskContent.classList.remove("completedTask");
};

const remove = (tasks, container) => {
  const allTasks = JSON.parse(localStorage.getItem("tasks"));

  const tasksToDisplay = tasks.filter((task) => {
    return !task.deleted;
  });

  const deletedTasks = tasks
    .filter((task) => {
      return task.deleted;
    }).map((task) => task.id);

  const tasksToDelete = new Set(deletedTasks);

  const updatedTasks = allTasks.filter((task) => {
    return !tasksToDelete.has(task.id);
  });

  outputData(tasksToDisplay, container);
  updateData(updatedTasks);
  document.querySelector("span.tasks-left").textContent = tasksLeft();
};

export const outputData = (tasks, container) => {
  container.textContent = "";

  tasks.forEach((task) => {
    const taskContainer = document.createElement("div");
    taskContainer.className = "task";

    const checkBoxAndContent = document.createElement("div");
    checkBoxAndContent.className = "flexCheckBox";

    const taskContent = document.createElement("p");
    taskContent.innerText = task.text;

    const checkbox = document.createElement("span");
    checkbox.className = "material-symbols-outlined checkbox";
    isTaskCompleted(task, checkbox, taskContent);

    checkbox.onclick = () => {
      task.completed = !task.completed;
      isTaskCompleted(task, checkbox, taskContent);
      updateData(tasks);
      document.querySelector("span.tasks-left").textContent = tasksLeft();
    };

    const deleteTask = document.createElement("span");
    deleteTask.className = "material-symbols-outlined delete";
    deleteTask.textContent = "delete";
    deleteTask.onclick = () => {
      task.deleted = true;
      remove(tasks, container);
    };

    checkBoxAndContent.appendChild(checkbox);
    checkBoxAndContent.appendChild(taskContent);

    taskContainer.appendChild(checkBoxAndContent);
    taskContainer.appendChild(deleteTask);

    container.appendChild(taskContainer);
  });
};
