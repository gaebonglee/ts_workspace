import React, { useState } from "react";
import "../styles/TodoList.scss";
import TodoItem from "./TodoItem";
import { Category, Task } from "../types/task";
//아이콘
import { RiDeleteBin2Fill } from "react-icons/ri";

const TodoList: React.FC = () => {
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]); // 할 일 목록

  const toggleInput = (): void => {
    setIsInputVisible(!isInputVisible);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      const newCat: Category = {
        id: categories.length + 1,
        text: newCategory,
      };
      const updatedCategories = [...categories, newCat];
      setCategories(updatedCategories);
      setNewCategory("");
      setActiveCategory(updatedCategories[0]); // 첫 번째 카테고리를 활성화
    }
  };

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
  };

  const handleDeleteCategory = () => {
    if (activeCategory) {
      setCategories(categories.filter((cat) => cat.id !== activeCategory.id));
      setActiveCategory(categories.length > 1 ? categories[0] : null); // 삭제 후 첫 번째 카테고리 또는 null 설정
    }
  };

  const getTasksForCategory = (categoryId: number) => {
    return tasks.filter((task) => task.categoryId === categoryId);
  };

  return (
    <div className="todoList_container">
      <section className="titleSection">
        <div className="title">
          <a>To Do List</a>
          <div className="addBtn" id="titleAdd">
            <button
              onClick={toggleInput}
              className={isInputVisible ? "rotate" : ""}
            >
              +
            </button>
          </div>
        </div>
        <div className={`inputContainer ${isInputVisible ? "show" : ""}`}>
          <div className="category_inputWrap">
            <input
              type="text"
              placeholder="Enter New Category"
              value={newCategory}
              onChange={handleInputChange}
            />
            <button onClick={handleAddCategory}>Add</button>
          </div>
        </div>
      </section>
      <div className="column">
        <section className="categorySection">
          {categories.length === 0 ? (
            <p className="categoryNone">카테고리를 추가해주세요</p>
          ) : (
            <div className="category">
              {categories.map((category) => (
                <div key={category.id} className="categoryItemWrapper">
                  <a
                    className={`categoryItem ${
                      activeCategory?.id === category.id ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.text}
                  </a>
                  {activeCategory?.id === category.id && (
                    <div
                      className="categoryDelete"
                      id="categoryDelete"
                      onClick={handleDeleteCategory}
                    >
                      <RiDeleteBin2Fill />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
        <section className="taskSection">
          {activeCategory ? (
            <>
              <div className="categoryWrap">
                <a>{activeCategory.text}</a>
                <div className="taskAdd">
                  <button>+</button>
                </div>
              </div>
              {getTasksForCategory(activeCategory.id).length === 0 ? (
                <p className="taskNone">할 일을 추가해주세요</p>
              ) : (
                <div className="tabWrap">
                  <div className="tabContainer">
                    <div
                      className={`tabStyle ${
                        activeTab === "all" ? "active" : ""
                      }`}
                      id="all"
                      onClick={() => handleTabClick("all")}
                    >
                      <div className="taskNum">
                        {getTasksForCategory(activeCategory.id).length}
                      </div>
                      <a>All</a>
                    </div>
                  </div>
                  <div className="tabContainer">
                    <div
                      className={`tabStyle ${
                        activeTab === "done" ? "active" : ""
                      }`}
                      id="done"
                      onClick={() => handleTabClick("done")}
                    >
                      <div className="taskNum">
                        {
                          getTasksForCategory(activeCategory.id).filter(
                            (task) => task.completed
                          ).length
                        }
                      </div>
                      <a>Done</a>
                    </div>
                  </div>
                  <div className="tabContainer">
                    <div
                      className={`tabStyle ${
                        activeTab === "notDone" ? "active" : ""
                      }`}
                      id="notDone"
                      onClick={() => handleTabClick("notDone")}
                    >
                      <div className="taskNum">
                        {
                          getTasksForCategory(activeCategory.id).filter(
                            (task) => !task.completed
                          ).length
                        }
                      </div>
                      <a>Not Done</a>
                    </div>
                  </div>
                </div>
              )}
              {getTasksForCategory(activeCategory.id).length > 0 && (
                <TodoItem tasks={getTasksForCategory(activeCategory.id)} />
              )}
            </>
          ) : (
            <p className="taskNone">카테고리를 추가해주세요</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default TodoList;
