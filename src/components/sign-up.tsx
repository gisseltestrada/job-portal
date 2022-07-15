import React, { useState } from "react";
import "./sign-up.css";
import { NewUserInput } from "../interfaces/newUser";
import axios from "axios";
import AccountHome from "./account-home";
import env from "react-dotenv";

const apiUrl =
  `${env.REACT_APP_JOB_PORTAL_URL}${env.REACT_APP_CREATE_USER_ENDPOINT}` ||
  "";
// const apiUrl = "http://localhost:4200/api/v1/users/createNewUser";

export default function SignUp() {
  const [user, setUser] = useState<NewUserInput>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    title: "",
    company: "",
    salary: 0,
    role: "",
    confirmPassword: "",
  });
  const [authorize, setAuthorize] = useState(false);
  const [error, setError] = useState<any>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Submitted.");
    console.log(user, apiUrl);
    const {
      email,
      password,
      firstName,
      lastName,
      dob,
      address,
      title,
      company,
      salary,
      role,
      ...filters
    } = user;
    // TODO: Create logic to send the JSON body to the api
    // axios
    //   .post(apiUrl, {
    //     email: email,
    //     password: password,
    //     profile: {
    //       name: `${firstName} ${lastName}`,
    //       dob: dob,
    //       address: address,
    //     },
    //     occupancy: {
    //       title: title,
    //       company: company,
    //       salary: salary,
    //       role: role,
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    if (user) {
      try {
        const response = await axios.post(apiUrl, {
        email: email,
        password: password,
        profile: {
          name: `${firstName} ${lastName}`,
          dob: dob,
          address: address,
        },
        occupancy: {
          title: title,
          company: company,
          salary: salary,
          role: role,
        },
      });
        if (response.status === 200) {
         setAuthorize(true);
         console.log(response);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
            setError(error);
          console.log(error);
        }
      }
    } 
  };

  return (
    <div>
      {authorize === false && (
        <div className="main-box">
          <h1 className="create-account">Create Account</h1>
          <form onSubmit={onSubmit}>
            <div className="name-boxes">
              <input
                className="input-boxes1"
                type="text"
                name="firstName"
                placeholder="first name"
                onChange={handleChange}
              />
              <input
                className="input-boxes2"
                type="text"
                name="lastName"
                placeholder="last name"
                onChange={handleChange}
              />
            </div>

            <section className="input-boxes">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="e-mail"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="dob"
                id="dob"
                placeholder="date of birth 00/00/0000"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="address"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="job title"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="company"
                id="company-employed"
                placeholder="company employed"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="role"
                id="role"
                placeholder="role"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="number"
                name="salary"
                id="salary"
                placeholder="salary"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="password"
                onChange={handleChange}
                required
              />
            </section>
            <section className="input-boxes">
              <input
                type="text"
                name="confirmPassword"
                id="confirm-password"
                placeholder="confirm password"
                onChange={handleChange}
                required
              />
            </section>

            <button type="submit" className="next-button">
              Next
            </button>
          </form>
        </div>
      )}

      <div>{authorize && <AccountHome />}</div>
    </div>
  );
}
