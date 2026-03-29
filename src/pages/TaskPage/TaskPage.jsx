import { useState, useEffect } from "react";
import tasksAPI from "@/shared/api/tasks";

const TaskPage = (props) => {
  const { params } = props;

  const [task, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    tasksAPI
      .getById(params.id)
      .then((taskData) => {
        setTasks(taskData);
        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Task Not Found!</div>;
  }

  return (
    <div>
      <h1>{task.title}</h1>
      <p>Status: {task.isDone ? "Completed" : "Incomplete"}</p>
    </div>
  );
};

export default TaskPage;
