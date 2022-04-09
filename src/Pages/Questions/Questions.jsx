import "./questions.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGlobal } from "../../context/GlobalContext";
const Questions = ({}) => {
  const {
    allQuestion,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    handleReset,
  } = useGlobal();
  const [options, setOptions] = useState();
  const [selectedOption, setSelectedOption] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    setOptions(
      shuffle([
        allQuestion[currentQuestion].correct_answer,
        ...allQuestion[currentQuestion].incorrect_answers,
      ])
    );
  }, [allQuestion, currentQuestion]);
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const handleOptionStyle = (option) => {
    if (option === allQuestion[currentQuestion].correct_answer)
      return "corret-option";
    else if (
      option === selectedOption &&
      selectedOption !== allQuestion[currentQuestion].correct_answer
    )
      return "wrong-option";
    else if (
      option === selectedOption &&
      selectedOption === allQuestion[currentQuestion].correct_answer
    )
      return "corret-option";
    else {
      return "disable-btn";
    }
  };

  const handleOption = (option) => {
    setSelectedOption(option);
    if (option === allQuestion[currentQuestion].correct_answer)
      setScore(score + 10);
  };
  const handleNext = () => {
    if (currentQuestion > 8 && selectedOption) {
      navigate("/score");
      handleReset();
    } else if (selectedOption) {
      setCurrentQuestion((prevCount) => prevCount + 1);
      setSelectedOption();
    }
  };

  const handleQuit = () => {
    navigate("/");
    handleReset();
  };

  return (
    <>
      <h4 className="text-center question-heading">Welcome to The quiz</h4>
      <div className="container text-center question-container">
        <div>{allQuestion[currentQuestion].question}</div>
        <div className="question-details flex-row">
          <h4 className="text-xl">Question {currentQuestion + 1}/10</h4>
          <h4 className="text-xl">Score: {score}</h4>
        </div>

        <div className="option-container flex-column">
          {options &&
            options.map((option, index) => (
              <div key={index}>
                <button
                  className={`option-btn ${
                    selectedOption && handleOptionStyle(option)
                  }`}
                  onClick={() => handleOption(option)}
                  disabled={selectedOption}
                >
                  {option}
                </button>
              </div>
            ))}
        </div>
        <div className="question-details flex-row">
          <button
            className="btn btn-outlined-secondary text-lg btn-quit"
            onClick={() => handleQuit()}
          >
            Quit
          </button>
          <button
            className="btn btn-solid-primary text-lg text-white btn-next"
            onClick={() => handleNext()}
          >
            {currentQuestion > 8 ? "End Quiz" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
};

export { Questions };
