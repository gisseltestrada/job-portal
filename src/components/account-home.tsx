import "./account-home.css";
import React from "react";


export default function AccountHome() {
  return (
    <div>
      <h1>Job Portal</h1>
      <nav>
        <ul>
          <li>Account Information</li>
          <li>Search Portal</li>
        </ul>
      </nav>
      <div>
        <h2>Search Portal</h2>
        <form action="">
            <input type="text" />
        </form>
        <button>Search</button>
      </div>
    </div>
  );}