import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChainlitAPI, sessionState, useChatSession } from "@chainlit/react-client";
import { Playground } from "./components/playground";
import { LandingPage } from "./components/LandingPage";
import { PrakrutiAnalyzerPage } from "./components/PrakrutiAnalyzerPage";
import { useRecoilValue } from "recoil";

const CHAINLIT_SERVER = "http://localhost:8000";
const userEnv = {};

const apiClient = new ChainlitAPI(CHAINLIT_SERVER);

function App() {
  const { connect } = useChatSession();
  const session = useRecoilValue(sessionState);

  useEffect(() => {
    connect({ client: apiClient, userEnv });
  }, [session, connect]);

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
