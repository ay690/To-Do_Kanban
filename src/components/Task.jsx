import React from "react";

const Task = ({ task, moveTask, nextStatus }) => {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.status === "Completed" && (
        <p>Completed at: {new Date(task.completedAt).toLocaleString()}</p>
      )}
      <div>
        {nextStatus && (
          <button  onClick={() => moveTask(task.id, nextStatus)}>
            Move to {nextStatus}
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
