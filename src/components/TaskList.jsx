import React from "react";
import Task from "./Task";

const TaskList = ({ title, tasks, moveTask, nextStatus }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <Task task={task} key={index} moveTask={moveTask} nextStatus={nextStatus} />
      ))}
    </div>
  );
};

export default TaskList;
