import React from "react";
import { Category } from "../types/task";
import "../styles/HeaderSection.scss";

interface HeaderSectionProps {
  newCategory: string;
  setNewCategory: React.Dispatch<React.SetStateAction<string>>;
  handleAddCategory: () => void;
  isInputVisible: boolean;
  toggleInput: () => void;
  categories: Category[];
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  newCategory,
  setNewCategory,
  handleAddCategory,
  isInputVisible,
  toggleInput,
  categories,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.target.value);
  };

  return (
    <section
      className={`titleSection ${categories.length > 0 ? "shrink" : ""}`}
    >
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
  );
};

export default HeaderSection;
