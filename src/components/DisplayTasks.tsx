import { Task } from "../App";
import EditTaskModal from "./EditTaskModal";

interface Props {
  tasksList: Task[];
  deleteTask: (taskId: number) => void;
  taskIsDone: (task: Task) => void;
  editTask: (e: any, task: Task) => void;
}

function DisplayTasks({ tasksList, deleteTask, taskIsDone, editTask }: Props) {
  const handleDeleteTask = (
    e: React.MouseEvent<HTMLButtonElement>,
    taskId: number
  ) => {
    e.stopPropagation(); // Zatrzymujemy propagację zdarzenia, aby kliknięcie na przycisk nie wpływało na kliknięcie na li
    deleteTask(taskId); // Wywołujemy funkcję deleteTask, aby usunąć zadanie
  };
  const handleLiClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;
    const editButtonClicked = target.classList.contains("editTask_btn");
    if (!editButtonClicked) {
      const taskId = parseInt(target.dataset.taskId as string, 10);
      const clickedTask = tasksList.find((task) => task.id === taskId);
      if (clickedTask) {
        taskIsDone(clickedTask);
      }
    }
  };
  return (
    <ul className="list-group">
      {tasksList.map((task: Task) => (
        <li
          onClick={handleLiClick}
          data-task-id={task.id}
          key={task.id}
          className={`list-group-item task ${task.isDone ? "isDone" : ""}`}
        >
          {task.task}
          <div className="li_buttons">
            <EditTaskModal
              task={task}
              editTask={(e: any, task: Task) => editTask(e, task)}
            />
            <button
              onClick={(e) => handleDeleteTask(e, task.id)}
              type="button"
              className="btn-close"
              aria-label="Close"
              title="Usuń zadanie"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DisplayTasks;
