interface Props {
  tasksList: any;
  deleteTask: any;
}

function DisplayTasks({ tasksList, deleteTask }: Props) {
  return (
    <ul className="list-group">
      {tasksList.map((task: any) => (
        <li key={task.id} className="list-group-item task">
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
