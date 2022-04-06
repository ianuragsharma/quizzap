import "./rules.css";
import { rules } from "../../db/rules";
import { Link } from "react-router-dom";
const Rules = () => {
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
          <Link to="/">
            <button className="btn btn-solid-primary text-xl text-black fw-700 btn-cta">
              Lets Start!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Rules };
