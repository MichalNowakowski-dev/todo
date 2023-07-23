import { Task } from "../App";

interface Props {
  tasksList: Task[];
  deleteTask: (taskId: number) => void;
  taskIsDone: (e: any, task: Task) => void;
}

function DisplayTasks({ tasksList, deleteTask, taskIsDone }: Props) {
  return (
    <ul className="list-group">
      {tasksList.map((task: any) => (
        <li
          onClick={(e) => taskIsDone(e, task)}
          key={task.id}
          className="list-group-item task"
        >
          {task.task}
          <button
            onClick={() => deleteTask(task.id)}
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
