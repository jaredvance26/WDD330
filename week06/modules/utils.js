import { updateData } from "./ls.js"

export const tasksLeft = (tasks) => {
  return tasks.reduce((acc, task) => {
    if (!task.completed || !task.deleteTask) {
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
  tasks = tasks.filter((task) => {
    return task.deleted !== true;
  });

  outputData(tasks, container);
  updateData(tasks);
  document.querySelector("span.tasks-left").textContent = tasksLeft(tasks);
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
