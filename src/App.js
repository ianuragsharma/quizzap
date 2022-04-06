import { HomePage, Quizzes, Rules } from "./Pages";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import "./styles/common.css";
const App = () => {
  return (
    <div>
      <div className="body-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/quizzes" exact element={<Quizzes />} />
          <Route path="/rules" exact element={<Rules />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
