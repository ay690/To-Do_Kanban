import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, updateTask, currentTask, clearCurrentTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

 
  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setDescription(currentTask.description);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      updateTask(currentTask.id, title, description);
      clearCurrentTask();
    } else {
      addTask(title, description);
    }
    setTitle('');
    setDescription('');
  };


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="Add Task"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{currentTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
