import React from "react";
import { Task } from "../types/task";
import "../styles/TodoItem.scss";
//아이콘
import { FaCheck } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";

interface TodoItemProps {
  tasks: Task[];
}

const TodoItem: React.FC<TodoItemProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task_container">
          <div className="taskWrap">
            <div className="taskContent">
              <p>{task.text}</p>
            </div>
            <div className="taskBtnWrap">
              <button className="taskBtnStyle" id="edit">
                <FaCheck />
              </button>
              <button className="taskBtnStyle" id="delete">
                <RiDeleteBin2Fill />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
