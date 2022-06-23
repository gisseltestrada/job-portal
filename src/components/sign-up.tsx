import React, { useState } from 'react';
import './sign-up.css';
import { NewUserInput } from '../interfaces/newUser';

const apiUrl =
  `${process.env.REACT_APP_JOB_PORTAL_URL}${process.env.REACT_APP_CREATE_USER_ENDPOINT}` ||
  '';

export default function SignUp() {
  const [user, setUser] = useState<NewUserInput>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    title: '',
    company: '',
    salary: 0,
    role: '',
    confirmPassword: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Submitted.');
    console.log(user, apiUrl);
    // TODO: Create logic to send the JSON body to the api
  };

  return (
    <div>
      <div className="main-box">
        <h1>Create Account</h1>
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
              name="company"
              id="company"
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

          <button type="submit" className="button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
