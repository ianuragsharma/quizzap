import "./score.css";
import { useGlobal } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../../hooks";
import Confetti from "react-confetti";
import { useEffect, useRef, useState } from "react";

const Score = () => {
  const { allQuestion, score, handleReset } = useGlobal();
  useDocumentTitle("Score");
  const confettiRef = useRef(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  const allQuestions = allQuestion.map((question, idx) => (
    <div className="top">
      {question.question}
      <div className="option-container flex-column">
        {[...question.incorrect_answers].map((option, index) => (
          <div className="options" key={index}>
            <button className={"option-btn disable-btn"} disabled={true}>
              {option}
            </button>
          </div>
        ))}
        <button className={"option-btn corret-option"} disabled={true}>
          {question.correct_answer}
        </button>
      </div>
    </div>
  ));
  return (
    <div ref={confettiRef}>
      <Confetti
        className="confetti"
        numberOfPieces={1000}
        width={width}
        height={height}
        recycle={false}
      />
      <h4 className="text-center question-heading">
        Your Score is {score}/100
      </h4>
      <h4 className="text-xl text-center fw-500">
        Here are all the correct option
      </h4>
      <div className="container text-center">{allQuestions}</div>
      <div className="text-center">
        <Link to="/quizzes">
          <button
            className="btn btn-solid-primary text-xl text-black fw-700  btn-cta"
            onClick={handleReset}
          >
            Play Again?
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Score };
