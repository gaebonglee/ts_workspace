import React from "react";
import CategorySection from "./CategorySection";
import TodoItem from "./TodoItem";
import "../styles/Main.scss";
import { Category, Task } from "../types/task";

interface MainProps {
  categories: Category[];
  activeCategory: Category | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<Category | null>>;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const Main: React.FC<MainProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  tasks,
  setTasks,
  setCategories,
}) => {
  return (
    <div className="main_container">
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
  );
};

export default Main;
