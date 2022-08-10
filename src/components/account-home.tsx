import "./account-home.css";
import React, { useContext, useState } from "react";
import { LoginContext, ProfileContext } from "../Helper/context";
import { Link, Navigate } from "react-router-dom";
import env from "react-dotenv";
import SalaryComponent from "./salary-component";
import axios from "axios";
import { render } from "@testing-library/react";
import picture from "../images/catnoir.jpeg";
import { profile } from "console";
import { getNameOfDeclaration, getNodeMajorVersion } from "typescript";
import { ProfileResponse, SalaryResponse } from "../interfaces/AccountHome";
// import { EditUserInput } from "../interfaces/newUser";

export default function AccountHome() {
  const { authorized, setAuthorized } = useContext<any>(LoginContext);
  const apiUrl =
    `${env.REACT_APP_JOB_PORTAL_URL}${env.REACT_APP_GET_SALARIES_ENDPOINT}` ||
    "";
  const updateUrl =
    `${env.REACT_APP_JOB_PORTAL_URL}${env.REACT_APP_UPDATE_USER_ENDPOINT}` || "";
  const idUrl =
    `${env.REACT_APP_JOB_PORTAL_URL}${env.REACT_APP_GET_USER_BY_ID_ENDPOINT}` ||
    "";
  const [occupancy, setOccupancy] = useState<string>("");
  const [data, setData] = useState<SalaryResponse | null >(null);
  const [error, setError] = useState<any>(null);
  const [salaries, setSalaries] = useState<number[] | null>(null);
  const [average, setAverage] = useState<string | null>(null);
  const { profileData, setProfileData } = useContext<any>(ProfileContext);
  const profileId = profileData._id;
  const [edit, setEdit] = useState<boolean>(false);
  const [mainPage, setMainPage] = useState<boolean>(true);
  const [editUser, setEditUser] = useState<ProfileResponse>({
    _id: profileId,
    email: undefined,
    password: undefined,
    about: undefined,
    address: undefined,
    title: undefined,
    role: undefined,
    salary: undefined,
    // occupancy: undefined,
    company: undefined,
    location: undefined,
    city: undefined,
    experience: undefined,
    phone: undefined,
    site: undefined,
    gender: undefined,
    pronouns: undefined,
    skill1: undefined,
    skill2: undefined,
    skill3: undefined,
    skill4: undefined,
    skill5: undefined,
    prevcompany: undefined,
    prevlocation: undefined,
    prevsalary: undefined
  });

  if (!authorized) {
    return <Navigate to="/" />;
  }

  const handleJobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOccupancy(event.target.value);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditUser({
      ...editUser,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError(null);
    setMainPage(false);
    // setSalaries(null);
    event.preventDefault();
    console.log(occupancy, apiUrl);
    try {
      const response = await axios.get(apiUrl, {
        params: {
          occupancy: occupancy,
        },
      });
      if (response.status === 200) {
        setData(response.data);
        setAverage(response.data.user.average);
        setSalaries(response.data.user.salaries);
        console.log(response);
      }
    } catch (error) {
      setData(null);
      setError({
        title: "",
        message: "Job not found. Please try again.",
        resolution: "PLEASE TRY AGAIN",
      });
      console.log(error);
    }
  };
  const onEdit = () => {
    if (!edit) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  };

  const onEditSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(editUser, updateUrl);
    const {
      _id,
      email,
      password,
      about,
      address,
      title,
      role,
      salary,
      company,
      location,
      city,
      experience,
      phone,
      site,
      gender,
      pronouns,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      prevcompany,
      prevlocation,
      prevsalary,
    } = editUser;

    //PUT request for infomation change
    if (editUser) {
      try {
        const response = await axios.put(updateUrl, {
          _id: _id,
          email: email,
          password: password,
          "profile.about": about,
          "profile.address": address,
          "occupancy.title": title,
          "occupancy.company": company,
          "occupancy.salary": salary,
          "occupancy.role": role,
          "occupancy.location": location,
          city: city,
          experience: experience,
          phone: phone,
          site: site,
          gender: gender,
          pronouns: pronouns,
          "skills.skill1": skill1,
          "skills.skill2": skill2,
          "skills.skill3": skill3,
          "skills.skill4": skill4,
          "skills.skill5": skill5,
          "previous.prevcompany": prevcompany,
          "previous.prevlocation": prevlocation,
          "previous.prevsalary": prevsalary,
        });

        if (response.status === 200) {
          console.log(response);
          try {
            const response = await axios.get(idUrl, {
              params: {
                _id: _id,
              },
            });
            if (response.status === 200) {
              console.log(response);
              setProfileData(response.data.user);
              setEdit(false);
              setEditUser({
                _id: profileId,
                email: undefined,
                password: undefined,
                about: undefined,
                address: undefined,
                title: undefined,
                role: undefined,
                salary: undefined,
                // occupancy: undefined,
                company: undefined,
                location: undefined,
                city: undefined,
                experience: undefined,
                phone: undefined,
                site: undefined,
                gender: undefined,
                pronouns: undefined,
                skill1: undefined,
                skill2: undefined,
                skill3: undefined,
                skill4: undefined,
                skill5: undefined,
                prevcompany: undefined,
                prevlocation: undefined,
                prevsalary: undefined,
              });
            }
          } catch (error) {
            setError({
              title: "",
              message: "Cannot retrieve person. Email not found.",
              resolution: "may have changed email",
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

  const logOut = (event: any) => {
    setAuthorized(false);
    setProfileData(null);
  };

  // const renderSalaries = salaries?.map(
  //   (salary: number, index: React.Key | null | undefined) => {
  //     return (
  //       // eslint-disable-next-line react/jsx-key
  //       <SalaryComponent salary={salary} key={index} />
  //     );
  //   }
  // );

  return (
    <div>
      <header className="account-header">
        <h1 className="company-name">{profileData.occupancy.company}</h1>
        <div className="income-div">
          <div className="toolbar-search">
            <div className="search-icon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="search-icon"
              >
                <path d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038Z" />
              </svg>
            </div>
          </div>
          <form action="" onSubmit={onSubmit}>
            <input
              className="input"
              type="text"
              required
              onChange={handleJobChange}
              placeholder="Search"
            />
          </form>
        </div>

        <nav className="nav-container">
          <ul className="nav-links">
            <li>
              <a
                href="#"
                onClick={() => {
                  setMainPage(false);
                }}
              >
                Jobs
              </a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setMainPage(true);
                }}
              >
                Profile
              </a>
            </li>
            <li>
              <Link
                to="/"
                type="submit"
                className="logout-button"
                onClick={logOut}
              >
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {profileData && mainPage && !edit && (
        <div>
          <div className="profile">
            <div className="column-one">
              <div className="img-div">
                <img
                  className="cat-image"
                  src={picture}
                  alt="cat in sunglasses"
                />
              </div>
              <div className="work">
                <div className="work-container">
                  <h4>Work</h4>
                  <span>
                    <hr />
                  </span>
                </div>
                <div className="job-container">
                  <h3>{profileData.occupancy.company}</h3>
                  <h4>{profileData.occupancy.location}</h4>
                  <h2>Salary:{" " + profileData.occupancy.salary}</h2>
                </div>
                <div className="job-container">
                  <h3>{profileData.previous?.prevcompany}</h3>
                  <h4>{profileData.previous?.prevlocation}</h4>
                  <h2>
                    {profileData.previous?.prevsalary
                      ? "Salary: " + profileData.previous.prevsalary
                      : ""}
                  </h2>
                </div>
              </div>
              <div className="skills">
                <div className="skills-title">
                  <h4>Skills</h4>
                  <span>
                    <hr />
                  </span>
                </div>

                <ul>
                  <li>
                    <h3>{profileData.skills?.skill1}</h3>
                  </li>
                  <li>
                    <h3>{profileData.skills?.skill2}</h3>
                  </li>
                  <li>
                    <h3>{profileData.skills?.skill3}</h3>
                  </li>
                  <li>
                    <h3>{profileData.skills?.skill4}</h3>
                  </li>
                  <li>
                    <h3>{profileData.skills?.skill5}</h3>
                  </li>
                </ul>
              </div>
            </div>

            <div className="column-two">
              <div className="profile-container">
                <div className="profile-name-container">
                  <h1 className="profile-name">{profileData.profile.name}</h1>
                  <div className="location-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z" />
                    </svg>
                    <h4 className="location">{profileData.city}</h4>
                  </div>
                </div>

                <div className="profile-description-container">
                  <h3>{profileData.occupancy.title}</h3>
                  <h4>{profileData.experience} years Experience</h4>
                </div>
              </div>
              <div className="bio-container">
                <h3>Bio</h3>
                <p className="bio-description">{profileData.profile.about}</p>
              </div>

              <div className="about-container">
                <div className="about-header">
                  <div className="about">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <g data-name="Layer 2">
                        <circle cx="16" cy="6.96" r="6" />
                        <path d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z" />
                      </g>
                    </svg>

                    <h3>About</h3>
                  </div>
                  <div className="edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#c2cad2"
                        d="M13.6568542,2.34314575 C14.4379028,3.12419433 14.4379028,4.39052429 13.6568542,5.17157288 L6.27039414,12.558033 C5.94999708,12.87843 5.54854738,13.105727 5.10896625,13.2156223 L2.81796695,13.7883721 C2.45177672,13.8799197 2.12008033,13.5482233 2.21162789,13.182033 L2.78437771,10.8910338 C2.894273,10.4514526 3.12156995,10.0500029 3.44196701,9.72960586 L10.8284271,2.34314575 C11.6094757,1.56209717 12.8758057,1.56209717 13.6568542,2.34314575 Z M10.1212441,4.46435931 L4.14907379,10.4367126 C3.95683556,10.6289509 3.82045738,10.8698207 3.75452021,11.1335694 L3.38388341,12.6161166 L4.86643062,12.2454798 C5.1301793,12.1795426 5.37104912,12.0431644 5.56328736,11.8509262 L11.5352441,5.87835931 L10.1212441,4.46435931 Z M11.5355339,3.05025253 L10.8282441,3.75735931 L12.2422441,5.17135931 L12.9497475,4.46446609 C13.3402718,4.0739418 13.3402718,3.44077682 12.9497475,3.05025253 C12.5592232,2.65972824 11.9260582,2.65972824 11.5355339,3.05025253 Z"
                      />
                    </svg>
                    <button onClick={onEdit}>Edit</button>
                    {/* <h4>Edit</h4> */}
                  </div>
                </div>
                <hr className="about-line" />

                <div className="contact-container">
                  <h4>Contact information</h4>
                  <h3>
                    Phone:
                    <span>
                      {profileData.phone ? " " + profileData.phone : ""}
                    </span>
                  </h3>
                  <h3>Address: {profileData.profile.address}</h3>
                  <h3>
                    Email: <span>{profileData.email}</span>
                  </h3>
                  <h3>Site: {profileData.site}</h3>
                </div>
                <div className="personal-container">
                  <h4>Personal information</h4>
                  <h3>Birthday: {profileData.profile.dob}</h3>
                  <h3>Password: ****** </h3>
                  <h3>Gender: {profileData.gender}</h3>
                  <h3>Pronouns: {profileData.pronouns}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {profileData && mainPage && edit && (
        <div>
          <form action="" onSubmit={onEditSubmit}>
            <div className="profile">
              <div className="column-one">
                <img
                  className="cat-image"
                  src={picture}
                  alt="cat in sunglasses"
                />
                <div className="work">
                  <div className="work-container">
                    <h4>Work</h4>
                    <span>
                      <hr />
                    </span>
                  </div>
                  <div className="job-container">
                    <h3>
                      <input
                        className="edit-input"
                        type="text"
                        name="company"
                        placeholder={profileData.occupancy.company}
                        onChange={handleChange}
                      />
                    </h3>
                    <h4>
                      <input
                        className="edit-input"
                        type="text"
                        name="location"
                        placeholder={
                          profileData.occupancy.location
                            ? profileData.occupancy.location
                            : "company location"
                        }
                        onChange={handleChange}
                      />
                    </h4>
                    <h2 className="salary-edit">
                      Salary:
                      <span>
                        <input
                          className="salary-input"
                          type="number"
                          name="salary"
                          placeholder={profileData.occupancy.salary}
                          onChange={handleChange}
                        />
                      </span>
                    </h2>
                  </div>
                  <div className="job-container">
                    <h3>
                      <input
                        className="edit-input"
                        type="text"
                        name="prevcompany"
                        placeholder={
                          profileData.previous?.prevcompany
                            ? profileData.previous.prevcompany
                            : "previous company name"
                        }
                        onChange={handleChange}
                      />
                    </h3>
                    <h4>
                      <input
                        className="edit-input"
                        type="text"
                        name="prevlocation"
                        placeholder={
                          profileData.previous?.prevlocation
                            ? profileData.previous.prevlocation
                            : "previous company location"
                        }
                        onChange={handleChange}
                      />
                    </h4>
                    <h2 className="salary-edit">
                      Salary:
                      <span>
                        <input
                          className="salary-input"
                          type="number"
                          name="prevsalary"
                          placeholder={
                            profileData.previous?.prevsalary
                              ? profileData.previous.prevsalary
                              : "previous salary"
                          }
                          onChange={handleChange}
                        />
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="skills">
                  <div className="skills-title">
                    <h4>Skills</h4>
                    <span>
                      <hr />
                    </span>
                  </div>

                  <ul>
                    <li>
                      <h3>
                        <input
                          className="edit-input"
                          type="text"
                          name="skill1"
                          placeholder={profileData.skills?.skill1}
                          onChange={handleChange}
                        />
                      </h3>
                    </li>
                    <li>
                      <h3>
                        {" "}
                        <input
                          className="edit-input"
                          type="text"
                          name="skill2"
                          placeholder={profileData.skills?.skill2}
                          onChange={handleChange}
                        />
                      </h3>
                    </li>
                    <li>
                      <h3>
                        {" "}
                        <input
                          className="edit-input"
                          type="text"
                          name="skill3"
                          placeholder={profileData.skills?.skill3}
                          onChange={handleChange}
                        />
                      </h3>
                    </li>
                    <li>
                      <h3>
                        {" "}
                        <input
                          className="edit-input"
                          type="text"
                          name="skill4"
                          placeholder={profileData.skills?.skill4}
                          onChange={handleChange}
                        />
                      </h3>
                    </li>
                    <li>
                      <h3>
                        {" "}
                        <input
                          className="edit-input"
                          type="text"
                          name="skill5"
                          placeholder={profileData.skills?.skill5}
                          onChange={handleChange}
                        />
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="column-two">
                <div className="profile-container">
                  <div className="profile-name-container">
                    <h1 className="profile-name">{profileData.profile.name}</h1>
                    <div className="location-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z" />
                      </svg>
                      <h4 className="location">
                        <input
                          className="city-input"
                          type="text"
                          name="city"
                          placeholder={
                            profileData.city ? profileData.city : "city, state"
                          }
                          onChange={handleChange}
                        />
                      </h4>
                    </div>
                  </div>

                  <div className="profile-description-container">
                    <h3>
                      <input
                        className="title-input"
                        type="string"
                        name="title"
                        placeholder={profileData.occupancy.title}
                        onChange={handleChange}
                      />
                    </h3>
                    <h4>
                      <input
                        className="salary-input"
                        type="number"
                        name="experience"
                        placeholder={
                          profileData.experience
                            ? profileData.experience + " years Experience"
                            : "years of experience"
                        }
                        onChange={handleChange}
                      />
                    </h4>
                  </div>
                </div>
                <div className="bio-container">
                  <h3>Bio</h3>
                  <p className="bio-description">
                    <input
                      className="edit-input"
                      type="text"
                      name="about"
                      placeholder={profileData.profile.about}
                      onChange={handleChange}
                    />
                  </p>
                </div>

                <div className="about-container">
                  <div className="about-header">
                    <div className="about">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <g data-name="Layer 2">
                          <circle cx="16" cy="6.96" r="6" />
                          <path d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z" />
                        </g>
                      </svg>

                      <h3>About</h3>
                    </div>
                    <div className="edit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#c2cad2"
                          d="M13.6568542,2.34314575 C14.4379028,3.12419433 14.4379028,4.39052429 13.6568542,5.17157288 L6.27039414,12.558033 C5.94999708,12.87843 5.54854738,13.105727 5.10896625,13.2156223 L2.81796695,13.7883721 C2.45177672,13.8799197 2.12008033,13.5482233 2.21162789,13.182033 L2.78437771,10.8910338 C2.894273,10.4514526 3.12156995,10.0500029 3.44196701,9.72960586 L10.8284271,2.34314575 C11.6094757,1.56209717 12.8758057,1.56209717 13.6568542,2.34314575 Z M10.1212441,4.46435931 L4.14907379,10.4367126 C3.95683556,10.6289509 3.82045738,10.8698207 3.75452021,11.1335694 L3.38388341,12.6161166 L4.86643062,12.2454798 C5.1301793,12.1795426 5.37104912,12.0431644 5.56328736,11.8509262 L11.5352441,5.87835931 L10.1212441,4.46435931 Z M11.5355339,3.05025253 L10.8282441,3.75735931 L12.2422441,5.17135931 L12.9497475,4.46446609 C13.3402718,4.0739418 13.3402718,3.44077682 12.9497475,3.05025253 C12.5592232,2.65972824 11.9260582,2.65972824 11.5355339,3.05025253 Z"
                        />
                      </svg>
                      <button onClick={onEdit}>Edit</button>
                      {/* <h4>Edit</h4> */}
                    </div>
                  </div>
                  <hr className="about-line" />

                  <div className="contact-container">
                    <h4>Contact information</h4>
                    <h3>
                      Phone:
                      <span>
                        {" "}
                        <input
                          className="edit-input"
                          type="number"
                          name="phone"
                          placeholder={profileData.phone}
                          onChange={handleChange}
                        />
                      </span>
                    </h3>
                    <h3>
                      Address:{" "}
                      <input
                        className="edit-input"
                        type="text"
                        name="address"
                        placeholder={profileData.profile.address}
                        onChange={handleChange}
                      />
                    </h3>
                    <h3>
                      Email:{" "}
                      <span>
                        <input
                          className="edit-input"
                          type="text"
                          name="email"
                          placeholder={profileData.email}
                          onChange={handleChange}
                        />
                      </span>
                    </h3>
                    <h3>
                      {" "}
                      Site:{" "}
                      <span>
                        <input
                          className="edit-input"
                          type="text"
                          name="site"
                          placeholder={profileData.site}
                          onChange={handleChange}
                        />
                      </span>{" "}
                    </h3>
                  </div>
                  <div className="personal-container">
                    <h4>Personal information</h4>
                    <h3>Birthday: {profileData.profile.dob}</h3>
                    <h3>
                      Password:{" "}
                      <div>
                        {" "}
                        <input
                          className="salary-input"
                          type="text"
                          name="password"
                          placeholder={profileData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </h3>
                    <h3>
                      Gender:{" "}
                      <span>
                        <input
                          className="salary-input"
                          type="text"
                          name="gender"
                          placeholder={profileData.gender}
                          onChange={handleChange}
                        />
                      </span>
                    </h3>
                    <h3>
                      Pronouns:{" "}
                      <span>
                        <input
                          className="salary-input"
                          type="text"
                          name="pronouns"
                          placeholder={profileData.pronouns}
                          onChange={handleChange}
                        />
                      </span>
                    </h3>
                  </div>
                  <button type="submit" className="submit-edit">
                    Change information
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      <div>
        {!mainPage && data && (
          <SalaryComponent
            salaries={salaries}
            average={average}
            company={profileData.occupancy.company}
            occupancy={occupancy}
          />
        )}
        {!mainPage && !data && (
          <SalaryComponent
            salaries={null}
            average={null}
            occupancy={null}
            company={null}
          />
        )}
        {/* {error && !mainPage && (
          <div className="salary-error">{error.message}</div>
        )} */}
        {/* {data && <SalaryComponent salary={salaries} average={average} />} */}
      </div>
    </div>
  );
}
// AccountHome.propTypes = {
//   // average: PropTypes.string.isRequired,
//   profileData: PropTypes.number.isRequired,
// };
