import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";

const Task = ({ task, moveTask, nextStatus, setCurrentTask }) => {
  return (
    <>
      <div className="task">
        <div className="contents">
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div className="icons">
            <GoPencil
              color="#72A0C1"
              onClick={() => setCurrentTask(task)}
              style={{ cursor: "pointer" }}
            />
            <RiDeleteBin6Line color="red" style={{ cursor: "pointer" }} />
          </div>
        </div>
        {task.status === "Completed" && (
          <p>Completed at: {new Date(task.completedAt).toLocaleString()}</p>
        )}
        <div>
          {nextStatus && (
            <button onClick={() => moveTask(task.id, nextStatus)}>
              Move to {nextStatus}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Task;
