import { useState } from "react";
import "./App.css";
import { TaskForm } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, description) => {
    const newTask = {id: Date.now(), title, description, status: "Pending"}
    setTasks([...tasks, newTask]);
  }

  console.log(tasks)

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
    </div>
  );
}

export default App;
