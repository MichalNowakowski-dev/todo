import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import DisplayTasks from "./components/DisplayTasks";

interface Task {
  id: number;
  task: string;
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
  console.log(nextTaskId);
  return (
    <div className="container">
      <AddTask addTask={addTask} />
      <DisplayTasks tasksList={data} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
