import React from "react";
import "./sign-up.css";

export function SignUp(props) {
  return (
    <div>
      <div className="main-box">
        <h1>Create Account</h1>
        <form /*</div>onSubmit={handleSubmit}*/>
          <div className="name-boxes">
            <input
              className="input-boxes1"
              type="text"
              name="first-name"
              placeholder="first name"
              // onChange={(e) => setLocation(e.target.value)}
            />
            <input
              className="input-boxes2"
              type="text"
              name="last-name"
              placeholder="last name"
              // onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <section className="input-boxes">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="e-mail"
              required
            />
          </section>

          <section className="input-boxes">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="date of birth 00/00/0000"
              required
            />
          </section>

          <section className="input-boxes">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="address"
              required
            />
          </section>

          <section className="input-boxes">
            <input
              type="text"
              name="job-title"
              id="job-title"
              placeholder="job title"
              required
            />
          </section>

          <section className="input-boxes">
            <input
              type="text"
              name="company-employed"
              id="company-employed"
              placeholder="company employed"
              required
            />
          </section>

          <section className="input-boxes">
            <input
              type="text"
              name="role"
              id="role"
              placeholder="role"
              required
            />
          </section>

          <section className="input-boxes">
            <input
              type="text"
              name="salary"
              id="salary"
              placeholder="salary"
              required
            />
          </section>

          <section className="input-boxes">
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              required
            />
          </section>
          <section className="input-boxes">
            <input
              type="text"
              name="confirm-password"
              id="confirm-password"
              placeholder="confirm password"
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
