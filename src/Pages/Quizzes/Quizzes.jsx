import "./quizzes.css";
import { CategoriesCard } from "../../components";
import { categories } from "../../db/categories";
import { useDocumentTitle } from "../../hooks";
import { useGlobal } from "../../context";
const Quizzes = () => {
  useDocumentTitle("Quizzes");
  const { searchQuery, setSearchQuery } = useGlobal();
  const filterQuiz = (categories, searchQuery) =>
    categories.filter((category) =>
      searchQuery
        ? category.title.toLowerCase().includes(searchQuery.toLowerCase())
        : categories
    );

  return (
    <>
      <h2 className="text-center quizzes-heading">
        Take any of the quizzes below
      </h2>
      <div className="container flex-row quizzies-container">
        {filterQuiz(categories, searchQuery).map((categories) => (
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
