export const updateData = (tasks) => {
	localStorage.setItem("tasks", JSON.stringify(tasks));
  };
