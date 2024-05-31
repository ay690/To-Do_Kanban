import React from "react";
import Task from "./Task";

const TaskList = ({ title, tasks }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <Task task={task} key={index} />
      ))}
    </div>
  );
};

export default TaskList;
