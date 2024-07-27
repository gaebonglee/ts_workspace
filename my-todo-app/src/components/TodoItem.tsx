import React, { useState } from "react";
import { Task, Category } from "../types/task";
import "../styles/TodoItem.scss";
import { FaCheck } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";

interface TodoItemProps {
  activeCategory: Category;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoItem: React.FC<TodoItemProps> = ({
  activeCategory,
  tasks,
  setTasks,
}) => {
  const [newTask, setNewTask] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskItem: Task = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
        categoryId: activeCategory.id,
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask("");
    }
  };

  const handleTaskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleToggleTaskCompletion = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const getFilteredTasks = () => {
    const categoryTasks = tasks.filter(
      (task) => task.categoryId === activeCategory.id
    );
    if (activeTab === "done") {
      return categoryTasks.filter((task) => task.completed);
    } else if (activeTab === "notDone") {
      return categoryTasks.filter((task) => !task.completed);
    }
    return categoryTasks;
  };

  return (
    <section className="taskSection">
      <div className="categoryWrap">
        <a>{activeCategory.text}</a>
        <div className="taskAdd">
          <input
            type="text"
            placeholder="Enter New Task"
            value={newTask}
            onChange={handleTaskInputChange}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>
      <div className="fileContainer">
        <div className="tabWrap">
          <div className="tabContainer">
            <div
              className={`tabStyle ${activeTab === "all" ? "active" : ""}`}
              id="all"
              onClick={() => handleTabClick("all")}
            >
              <div className="taskNum">{getFilteredTasks().length}</div>
              <a>All</a>
            </div>
          </div>
          <div className="tabContainer">
            <div
              className={`tabStyle ${activeTab === "done" ? "active" : ""}`}
              id="done"
              onClick={() => handleTabClick("done")}
            >
              <div className="taskNum">
                {
                  tasks.filter(
                    (task) =>
                      task.categoryId === activeCategory.id && task.completed
                  ).length
                }
              </div>
              <a>Done</a>
            </div>
          </div>
          <div className="tabContainer">
            <div
              className={`tabStyle ${activeTab === "notDone" ? "active" : ""}`}
              id="notDone"
              onClick={() => handleTabClick("notDone")}
            >
              <div className="taskNum">
                {
                  tasks.filter(
                    (task) =>
                      task.categoryId === activeCategory.id && !task.completed
                  ).length
                }
              </div>
              <a>Not Done</a>
            </div>
          </div>
        </div>
        <div className="taskBoard">
          {getFilteredTasks().length === 0 ? (
            <p className="taskNone">할 일을 추가해주세요</p>
          ) : (
            getFilteredTasks().map((task) => (
              <div key={task.id} className="task_container">
                <div className="taskWrap">
                  <div className="taskContent">
                    <p>{task.text}</p>
                  </div>
                  <div className="taskBtnWrap">
                    <button
                      className="taskBtnStyle"
                      id="edit"
                      onClick={() => handleToggleTaskCompletion(task.id)}
                    >
                      <FaCheck />
                    </button>
                    <button
                      className="taskBtnStyle"
                      id="delete"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <RiDeleteBin2Fill />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TodoItem;
