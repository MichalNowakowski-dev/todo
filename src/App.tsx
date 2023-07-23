import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";

export interface Task {
  id: number;
  task: string;
  isDone: boolean;
}

function App() {
  const [data, setData] = useState<Task[]>([]);
  const [nextTaskId, setNextTaskId] = useState(0);

  const fetchData: any = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setData(data);
      setNextTaskId(data.length + 1);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => fetchData, []);

  const addTask = (e: any) => {
    e.preventDefault();
    const userValue = e.target[0].value;

    const newTaskObj = {
      task: userValue,
      id: nextTaskId,
      isDone: false,
    };

    setData((prevData) => [...prevData, newTaskObj]);
    setNextTaskId((prevId) => prevId + 1);
    console.log(userValue);

    e.target[0].value = "";
  };

  const deleteTask = (taskID: number) => {
    const newData = data.filter((task) => task.id !== taskID);
    setData(newData);
  };

  const taskIsDone = (e: any, task: Task) => {
    const updatedTask = { ...task, isDone: !task.isDone }; // Tworzymy nowy obiekt zadania, by zachować niezmienność stanu
    const updatedData = data.map((item) =>
      item.id === task.id ? updatedTask : item
    ); // Aktualizujemy zadanie w tablicy zadan
    setData(updatedData); // Ustawiamy nową tablicę zadan jako stan

    if (updatedTask.isDone) {
      e.target.classList.add("isDone");
    } else {
      e.target.classList.remove("isDone");
    }
  };
  return (
    <div className="container">
      <AddTask addTask={addTask} />
      <DisplayTasks
        tasksList={data}
        deleteTask={deleteTask}
        taskIsDone={(e, task) => taskIsDone(e, task)}
      />
    </div>
  );
}

export default App;
