import React, { useState, useEffect } from "react";
import "./App.css";
import { TaskForm, TaskList } from "./components";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const loadTasksFromLocalStorage = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  };

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

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

  const deleteTasks = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const clearCurrentTask = () => {
    setCurrentTask(null);
  };

  // console.log(tasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) return;

    const taskId = parseInt(result.draggableId);
    let newStatus;

    if (destination.droppableId === "Pending") {
      newStatus = "Pending";
    } else if (destination.droppableId === "InProgress") {
      newStatus = "In Progress";
    } else if (destination.droppableId === "Completed") {
      newStatus = "Completed";
    }

    moveTask(taskId, newStatus);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        currentTask={currentTask}
        clearCurrentTask={clearCurrentTask}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="task-sections">
          <TaskList
            title={"Pending"}
            tasks={tasks.filter((task) => task.status === "Pending")}
            moveTask={moveTask}
            nextStatus="In Progress"
            setCurrentTask={setCurrentTask}
            deleteTasks={deleteTasks}
            droppableId="Pending"
          />
          <TaskList
            title={"In Progress"}
            tasks={tasks.filter((task) => task.status === "In Progress")}
            moveTask={moveTask}
            nextStatus="Completed"
            setCurrentTask={setCurrentTask}
            deleteTasks={deleteTasks}
            droppableId="InProgress"
          />
          <TaskList
            title={"Completed"}
            tasks={tasks.filter((task) => task.status === "Completed")}
            moveTask={moveTask}
            setCurrentTask={setCurrentTask}
            deleteTasks={deleteTasks}
            droppableId="Completed"
          />
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
