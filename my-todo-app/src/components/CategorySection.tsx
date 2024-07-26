import React from "react";
import "../styles/CategorySection.scss";
import { Category } from "../types/task";
import { RiDeleteBin2Fill } from "react-icons/ri";

interface CategorySectionProps {
  categories: Category[];
  activeCategory: Category | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<Category | null>>;
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
  setCategories,
}) => {
  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category);
  };

  const handleDeleteCategory = (category: Category) => {
    setCategories(categories.filter((cat) => cat.id !== category.id));
    setActiveCategory(categories.length > 1 ? categories[0] : null);
  };

  return (
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
                  onClick={() => handleDeleteCategory(category)}
                >
                  <RiDeleteBin2Fill />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
