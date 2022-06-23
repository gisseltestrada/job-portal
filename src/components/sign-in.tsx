import React from 'react';
import './sign-in.css';

export function SignIn() {
  return (
    <div>
      <div className="main-div">
        <h1>Welcome!</h1>
        <form /*</div>onSubmit={handleSubmit}*/>
          <div className="name-boxes">
            <input
              className="input-boxes"
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <br />
            <input
              className="input-boxes"
              type="last-name"
              name="last-name"
              placeholder="Password"
            />
            <br />
            <a className="forgot-password" href="#">
              Forgot password?
            </a>
          </div>

          <div className="button-div">
            <button type="submit" className="create-button">
              Create account
            </button>
            <button type="submit" className="sign-in-button">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
