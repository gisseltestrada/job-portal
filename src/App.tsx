import React from "react";
import "./App.css";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import { Route, Routes } from "react-router-dom";
import AccountHome from "./components/account-home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/accounthome" element={<AccountHome />} />
      </Routes>
    </div>
  );
}

export default App;
