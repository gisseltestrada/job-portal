import React, { useContext, useState } from "react";
import "./sign-up.css";
import { NewUserInput } from "../interfaces/newUser";
import axios from "axios";
import env from "react-dotenv";
import { LoginContext, ProfileContext } from "../Helper/context";
import { Navigate } from "react-router-dom";

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
  const { authorized, setAuthorized } = useContext<any>(LoginContext);
  const [error, setError] = useState<any>(null);
  const [isValid, setIsValid] = useState<any>(null);
  const { profileData, setProfileData } = useContext<any>(ProfileContext);
   const idUrl = "http://localhost:4200/api/v1/users/getUserbyId";


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const validate =() => {
      if (user["password"] != user["confirmPassword"]) {
        setIsValid(false);
        setError("Passwords don't match.");
      } else {
        setIsValid(true);
        setError("Passwords match.");
      }
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
     confirmPassword,
   } = user;

     if(user["password"] !== user["confirmPassword"]){
      console.log("passwords do not match");
    } else{
      console.log("passwords match")
    }

    if (user) {
      try {
        const firstResponse = await axios.post(apiUrl, {
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
        if (firstResponse.status === 200) {
       
         console.log(firstResponse);
         console.log(firstResponse.data.user.insertedId);
         
           try {
             const response = await axios.get(idUrl, {
               params: {
                 _id: firstResponse.data.user.insertedId,
               },
             });
             if (response.status === 200) {
               console.log(response);
                   setAuthorized(true);
               setProfileData(response.data.user);
          
             }
           } catch (error) {
             setError({
               title: "",
               message: "Cannot retrieve person.ID not found.",
               resolution: "",
             });
             console.log(error);
           }
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
            setError(error);
          console.log(error);
        }
      }
    } 
  };

  if (authorized) {
    return <Navigate to="/accounthome" />;
  }

  return (
    <div className="sign-in-background">
        <div className="main-box">
          <h1 className="create-account">Create Account</h1>
          <form onSubmit={onSubmit}>
            <div className="name-boxes">
              <input
                className="input-boxes1"
                type="text"
                name="firstName"
                placeholder="FIRST NAME"
                onChange={handleChange}
              />
              <input
                className="input-boxes2"
                type="text"
                name="lastName"
                placeholder="LAST NAME"
                onChange={handleChange}
              />
            </div>

            <section className="input-boxes">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="E-MAIL"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="dob"
                id="dob"
                placeholder="DARE OF BIRTH 00/00/0000"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="address"
                id="address"
                placeholder="ADDRESS"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="JOB TITLE"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="company"
                id="company-employed"
                placeholder="COMPANY EMPLOYED"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="role"
                id="role"
                placeholder="ROLE"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="number"
                name="salary"
                id="salary"
                placeholder="SALARY"
                onChange={handleChange}
                required
              />
            </section>

            <section className="input-boxes">
              <input
                type="text"
                name="password"
                id="password"
                placeholder="PASSWORD"
                onChange={handleChange}
                onKeyUp={validate}
                required
              />
            </section>
            <section className="input-boxes">
              <input
                type="text"
                name="confirmPassword"
                id="confirm-password"
                placeholder="CONFIRM PASSWORD"
                onChange={handleChange}
                onKeyUp={validate}
                required
              />
              {!isValid && <span>{error}</span>}
            </section>

            <button
              type="submit"
              className="next-button"
              id="disabled"
              disabled={!isValid}
            >
              Next
            </button>
          </form>
        </div>
      
    </div>
  );
}
