import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home"; // Assuming you have a Home component
import Solution from "./pages/Solution";
import Quiz from "./pages/Quiz";
import Bot from "./pages/Bot";
import 'react-chat-elements/dist/main.css'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/chatbot" element={<Bot />} />
      </Routes>
    </div>
  );
}

export default App;
