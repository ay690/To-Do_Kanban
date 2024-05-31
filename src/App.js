import { useState } from "react";
import "./App.css";
import { TaskForm, TaskList } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = {id: Date.now(), title, description, status: "Pending"}
    // setTasks([...tasks, newTask]);
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  console.log(tasks)

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <div className="task-sections">
       <TaskList title={"Pending"}  tasks={tasks.filter((task) => task.status === "Pending")}
 />
       <TaskList title={"In Progress"}  tasks={tasks.filter((task) => task.status === "In Progress")}
 />
       <TaskList title={"Completed"}  tasks={tasks.filter((task) => task.status === "Completed")}
/>
      </div>
    </div>
  );
}

export default App;
