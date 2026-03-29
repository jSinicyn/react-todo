const useTasksLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return {
    savedTasks: savedTasks ? JSON.parse(savedTasks) : null,
    saveTasksToLocalStorage,
  };
};

export default useTasksLocalStorage;
