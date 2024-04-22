import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chatbot } from "./components/pages/Chatbot";
import { LandingPage } from "./components/pages/LandingPage";
import PrakrutiAnalyzerPage from "./components/pages/PrakrutiAnalyzerPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="chatbot" element={<Chatbot/>} />
        <Route path="prakruti-analyzer" element={<PrakrutiAnalyzerPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
