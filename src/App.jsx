import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingUn from "./pages/Auth/SingUp";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<SingUn />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
