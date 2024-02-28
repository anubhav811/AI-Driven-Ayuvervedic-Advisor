import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Playground } from "./components/playground";
import { LandingPage } from "./components/LandingPage";
import { PrakrutiAnalyzerPage } from "./components/PrakrutiAnalyzerPage";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="chatbot" element={<Playground/>} />
        <Route path="prakruti-analyzer" element={<PrakrutiAnalyzerPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
