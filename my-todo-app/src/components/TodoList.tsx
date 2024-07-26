import React, { useState } from "react";
import "../styles/TodoList.scss";
import TodoItem from "./TodoItem";
import HeaderSection from "./HeaderSection";
import CategorySection from "./CategorySection";
import { Category, Task } from "../types/task";

const TodoList: React.FC = () => {
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  // task 관련
  const [tasks, setTasks] = useState<Task[]>([]);

  const toggleInput = (): void => {
    setIsInputVisible(!isInputVisible);
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
      setActiveCategory(updatedCategories[0]);
      setIsInputVisible(false); // 카테고리 추가 후 input 숨김
    }
  };

  return (
    <div className="todoList_container">
      <HeaderSection
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        handleAddCategory={handleAddCategory}
        isInputVisible={isInputVisible}
        toggleInput={toggleInput}
        categories={categories}
      />
      {categories.length > 0 && (
        <div className="column">
          <CategorySection
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setCategories={setCategories}
          />
          {activeCategory && (
            <TodoItem
              activeCategory={activeCategory}
              tasks={tasks}
              setTasks={setTasks}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
