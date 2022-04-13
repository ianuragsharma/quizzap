import "./homepage.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="container">
        <h3 className="quiz-heading text-center ">
          Welcome to <span>Quizzap</span>{" "}
        </h3>
        <div className="flex-row ">
          <div>
            <p className="fw-300 text-lg quiz-into">
              Keeping yourself entertained and educated is just a quiz away.
              Want to have some fun or learn about a topic? Curated to learn
              while having fun, our online quizzes are an excellent source of
              knowledge and entertainment. Take a quiz today to discover amazing
              facts about yourself or the world.
            </p>

            <Link to="/quizzes">
              <button className="btn btn-solid-primary text-xl text-black fw-700  btn-cta">
                Take a quiz
              </button>
            </Link>
          </div>
          <img
            className="quiz-img"
            src="https://raw.githubusercontent.com/ianuragsharma/hostedIMG/5cebb378eba13a2b16737cbc3708333f62eae375/quiz/homepage/quiz.svg"
            alt="quiz-icon"
          />
        </div>
      </div>
    </>
  );
};

export { HomePage };
