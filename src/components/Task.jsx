import React from "react";

const Task = ({ task, key }) => {
  return (
    <div className="task" key={key}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
