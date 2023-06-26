import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingUp from "./ui/pages/Auth/SingUp";
import GlobalStyle from "./ui/assets/styles/GlobalStyle";
import SingIn from "./ui/pages/Auth/SingIn";
import Home from "./ui/pages/Home";
import { UserProvider } from "./data/contexts/userContext";
import HomeTwo from "./ui/pages/HomeTwo";

function App() {
  return (
    <>
    <GlobalStyle />
    <UserProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="/sign-up" element={<SingUp />} />
        </Routes>
    </Router>
    </UserProvider>
    
    </>
  )
}

export default App;
