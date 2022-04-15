import { createContext, useContext, useState } from "react";
const GlobalContext = createContext(null);
const GlobalContextProvider = ({ children }) => {
  const [allQuestion, setAllQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const handleReset = () => {
    setScore(0);
    setCurrentQuestion(0);
    setAllQuestion([]);
  };
  const values = {
    allQuestion,
    setAllQuestion,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    handleReset,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
const useGlobal = () => useContext(GlobalContext);
export { useGlobal, GlobalContextProvider };
