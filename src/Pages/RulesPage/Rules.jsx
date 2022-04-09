import "./rules.css";
import { rules } from "../../db/rules";
import { Link } from "react-router-dom";
import { Loader } from "../../components";
import { useGlobal } from "../../context/GlobalContext";
const Rules = () => {
  const { allQuestion } = useGlobal();
  console.log(allQuestion.length);
  return (
    <>
      <div className="container">
        <h4 className="quizzes-heading text-center">
          Please Read Out the rules before Procceding
        </h4>
        <div className="rules flex-column">
          <ul>
            {rules.map((item) => (
              <li key={item.id} className="text-xl">
                {item.id}. {item.rule}
              </li>
            ))}
          </ul>
          {allQuestion.length ? (
            <Link to="/quiz">
              <button className="btn btn-solid-primary text-xl text-black fw-700 btn-cta">
                Lets Start!
              </button>
            </Link>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export { Rules };
