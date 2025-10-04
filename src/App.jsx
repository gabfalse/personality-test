import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import ResultPage from "./Pages/ResultPage";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
