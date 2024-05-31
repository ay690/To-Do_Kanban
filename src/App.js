import { useState } from "react";
import "./App.css";
import { TaskForm, TaskList } from "./components";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (title, description) => {
    const newTask = { id: Date.now(), title, description, status: "Pending" };
    // setTasks([...tasks, newTask]);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const moveTask = (id, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            status: newStatus,
            completedAt: newStatus === "Completed" ? new Date() : undefined,
          }
        : task
    );
    setTasks(updatedTasks);
  };

  const updateTask = (id, title, description) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title, description } : task
    );
    setTasks(updatedTasks);
    setCurrentTask(null);
  };

  const clearCurrentTask = () => {
    setCurrentTask(null);
  };

  console.log(tasks);

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        currentTask={currentTask}
        clearCurrentTask={clearCurrentTask}
      />
      <div className="task-sections">
        <TaskList
          title={"Pending"}
          tasks={tasks.filter((task) => task.status === "Pending")}
          moveTask={moveTask}
          nextStatus="In Progress"
          setCurrentTask={setCurrentTask}
        />
        <TaskList
          title={"In Progress"}
          tasks={tasks.filter((task) => task.status === "In Progress")}
          moveTask={moveTask}
          nextStatus="Completed"
          setCurrentTask={setCurrentTask}
        />
        <TaskList
          title={"Completed"}
          tasks={tasks.filter((task) => task.status === "Completed")}
          moveTask={moveTask}
          setCurrentTask={setCurrentTask}
        />
      </div>
    </div>
  );
}

export default App;
