import React from "react";
import Task from "./Task";
import { Draggable, Droppable } from "react-beautiful-dnd";

const TaskList = ({
  title,
  tasks,
  moveTask,
  nextStatus,
  setCurrentTask,
  deleteTasks,
  droppableId,
}) => {
  return (
    <Droppable droppableId={droppableId} type="group">
      {(provided) => (
        <div
          className="task-list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>{title}</h2>
          {tasks.map((task, index) => (
            <Draggable
              key={task.id}
              draggableId={task.id.toString()}
              index={index}
            >
              {(provided) => (
                <div ref={provided.innerRef}>
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  <Task
                    task={task}
                    key={index}
                    moveTask={moveTask}
                    nextStatus={nextStatus}
                    setCurrentTask={setCurrentTask}
                    deleteTasks={deleteTasks}
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
