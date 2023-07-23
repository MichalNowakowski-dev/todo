import { Task } from "../App";

interface Props {
  tasksList: Task[];
  deleteTask: (taskId: number) => void;
  taskIsDone: (e: any, task: Task) => void;
}

function DisplayTasks({ tasksList, deleteTask, taskIsDone }: Props) {
  const handleDeleteTask = (
    e: React.MouseEvent<HTMLButtonElement>,
    taskId: number
  ) => {
    e.stopPropagation(); // Zatrzymujemy propagację zdarzenia, aby kliknięcie na przycisk nie wpływało na kliknięcie na li
    deleteTask(taskId); // Wywołujemy funkcję deleteTask, aby usunąć zadanie
  };
  return (
    <ul className="list-group">
      {tasksList.map((task: Task) => (
        <li
          onClick={(e) => taskIsDone(e, task)}
          key={task.id}
          className={`list-group-item task ${task.isDone ? "isDone" : ""}`}
        >
          {task.task}
          <button
            onClick={(e) => handleDeleteTask(e, task.id)}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </li>
      ))}
    </ul>
  );
}

export default DisplayTasks;
