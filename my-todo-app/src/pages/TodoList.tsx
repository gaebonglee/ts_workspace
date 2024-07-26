import React, { useState } from "react";
import "../styles/TodoList.scss";
import HeaderSection from "../components/HeaderSection";
import Main from "../components/Main";
import { Category, Task } from "../types/task";

const TodoList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

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
      setIsInputVisible(false);
    }
  };

  return (
    <div className="todoList_container">
      <HeaderSection
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        handleAddCategory={handleAddCategory}
        categories={categories}
        isInputVisible={isInputVisible}
        toggleInput={toggleInput}
      />
      {categories.length > 0 && (
        <Main
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          tasks={tasks}
          setTasks={setTasks}
          setCategories={setCategories}
        />
      )}
    </div>
  );
};

export default TodoList;
