import "./styles/common.css";
import {
  HomePage,
  Quizzes,
  Rules,
  Score,
  Questions,
  Login,
  Signup,
} from "./Pages";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <div className="body-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/quiz" element={<Questions />} />
          <Route path="/score" element={<Score />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
