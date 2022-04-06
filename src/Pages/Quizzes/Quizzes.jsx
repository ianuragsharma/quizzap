import "./quizzes.css";
import { CategoriesCard } from "../../components";
import { categories } from "../../db/categories";
const Quizzes = () => {
  return (
    <>
      <h2 className="text-center quizzes-heading">
        Take any of the quizzes below
      </h2>
      <div className="container flex-row quizzies-container">
        {categories.map((categories) => (
          <CategoriesCard
            key={categories.categoryNumber}
            categories={categories}
          />
        ))}
      </div>
    </>
  );
};

export { Quizzes };
