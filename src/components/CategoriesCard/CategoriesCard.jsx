import { Link } from "react-router-dom";
import "./categoriesCard.css";
import axios from "axios";
import { useGlobal } from "../../context/GlobalContext";
const CategoriesCard = ({ categories }) => {
  const { allQuestion, setAllQuestion } = useGlobal();

  const getQuestions = async (category, difficulty) => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
      );
      setAllQuestion(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="vertical-card flex-column card-shadow">
        <img
          className="img-categories"
          loading="lazy"
          src={categories.imageURL}
          alt="quiz"
        />

        <div className="card-details-container">
          <h3 className="text-xl my-1">{categories.title}</h3>
          <span className="text-sm ">{categories.description} </span>
        </div>
        <Link to="/rules" className="link-cta">
          <button
            className="btn btn-solid-primary categories-cta text-black fw-700 "
            onClick={() =>
              getQuestions(categories.categoryNumber, categories.difficulty)
            }
          >
            Take this Quiz
          </button>
        </Link>
      </div>
    </>
  );
};

export { CategoriesCard };
