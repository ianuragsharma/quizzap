import "./styles/common.css";
import { HomePage, Quizzes, Rules, Quiz, Score } from "./Pages";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <div className="body-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/quizzes" exact element={<Quizzes />} />
          <Route path="/rules" exact element={<Rules />} />
          <Route path="/quiz" exact element={<Quiz />} />
          <Route path="/score" exact element={<Score />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
