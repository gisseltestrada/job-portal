import axios from "axios";
// import { setDefaultResultOrder } from "dns";
import React, { useState } from "react";
import env from "react-dotenv";
import { Link } from "react-router-dom";
// import { createNumericLiteral } from "typescript";
import { errorInfo, ExistingUserInput } from "../interfaces/newUser";
import AccountHome from "./account-home";
import "./sign-in.css";

export default function SignIn() {
  const apiUrl =
    `${env.REACT_APP_JOB_PORTAL_URL}${env.REACT_APP_LOGIN_USER_ENDPOINT}` ||
    "";
  const [authorize, setAuthorize] = useState(false);
  const [error, setError] = useState<errorInfo|null>(null);
  const [user, setUser] = useState<ExistingUserInput>({
    email: "",
    password: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError(null);
    event.preventDefault();
    console.log(user, apiUrl);
    const url = apiUrl + user;
    const { email, password} = user;
    console.log(url);
    if (user) {
      try {
        const response = await axios.post(apiUrl, {
          email: email,
          password: password
        });
        if (response.status === 200) {
          setAuthorize(true);
          console.log(response);
          
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error);
            setError({
              title: "",
              message: "Incorrect email or password.",
              resolution: "Try again or reset password.",
            });
        }
      }
    }
  };

  return (
    <div>
      {!authorize && (
        <div className="main-div">
          <h1 className="welcome">Welcome!</h1>
          <form onSubmit={onSubmit}>
            <div className="sign-in-boxes">
              <input
                className="input-boxes"
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
                required
              />
              <br />
              <input
                className="input-boxes"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <br />
              <a className="forgot-password" href="#">
                Forgot password?
              </a>
            </div>
            <div className="button-div">
              <button type="submit" className="create-button">
                <Link to="/signup">Create account</Link>
              </button>
              <button type="submit" className="sign-in-button">
                Sign in
              </button>
            </div>
          </form>
          {error && (
            <div className="handle-error">
              <p className="message">{error.message}</p>
              <p className="resolution">{error.resolution}</p>
            </div>
          )}
        </div>
      )}
      {authorize && !error && <AccountHome />}
    </div>
  );
}
