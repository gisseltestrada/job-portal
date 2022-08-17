import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/sign-in";
import SignUp from "./components/sign-up";
import { Route, Routes } from "react-router-dom";
import AccountHome from "./components/account-home";
import {LoginContext, ProfileContext} from './Helper/context'


function App() {
  const [authorized, setAuthorized] = useState(false);
  const [profileData, setProfileData] = useState(null);

  return (
    <LoginContext.Provider value={{ authorized, setAuthorized }}>
      <ProfileContext.Provider value={{ profileData, setProfileData }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/accounthome" element={<AccountHome />} />
          </Routes>
        </div>
      </ProfileContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
