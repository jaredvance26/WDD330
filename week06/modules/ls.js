const tasksExist = localStorage.getItem("tasks") !== null;

if (!tasksExist) {
  localStorage.setItem("tasks", JSON.stringify([]));
}
export const tasks = JSON.parse(localStorage.getItem("tasks"));

export const updateData = (tasks) => {
	localStorage.setItem("tasks", JSON.stringify(tasks));
  };
