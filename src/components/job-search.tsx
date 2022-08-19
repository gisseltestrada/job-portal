import "./job-search.css";
import React from "react";

export default function JobSearchComponent() {
  return (
    <div>
      <div className="job-search-container">
        <div className="job-search-filters">
          <div className="filter-by">
            <h3>Filter by</h3>
            <button type="submit">Reset</button>
          </div>

          <form>
            <fieldset>
              <div className="remote-container">
                <div className="legend-label">
                  <legend>Remote</legend>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      x="0"
                      y="0"
                      version="1.1"
                      viewBox="0 0 29 29"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="none"
                        stroke="#5e5f62"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="m20.5 11.5-6 6-6-6"
                      />
                    </svg>
                  </button>
                </div>

                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="remote"
                    name="worktype"
                    value="remote"
                  ></input>
                  <label htmlFor="coding">100% remote</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="hybrid"
                    name="worktype"
                    value="hybrid"
                  ></input>
                  <label htmlFor="hybrid">Hybrid</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="notremote"
                    name="worktype"
                    value="notremote"
                  ></input>
                  <label htmlFor="notremote">No remote Work</label>
                </div>
              </div>

              <div className="salary-range">
                <div className="legend-label">
                  <legend>Salary</legend>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      x="0"
                      y="0"
                      version="1.1"
                      viewBox="0 0 29 29"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="none"
                        stroke="#5e5f62"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="m20.5 11.5-6 6-6-6"
                      />
                    </svg>
                  </button>
                </div>

                <div className="range-container">
                  <div className="range-quantity">
                    <p>$0</p>
                    <p>2,000,000+</p>
                  </div>
                  <input
                    type="range"
                    id="range"
                    name="range"
                    min="0"
                    max="2000000"
                  ></input>
                  <label htmlFor="range"> ╹ ╹ ╹ ╹ ╹ ╹ ╹ ╹ ╹ ╹ ╹</label>
                </div>
              </div>

              <div className="job-location">
                <div className="legend-label">
                  <legend>Location</legend>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Layer_1"
                      x="0"
                      y="0"
                      version="1.1"
                      viewBox="0 0 29 29"
                      xmlSpace="preserve"
                    >
                      <path
                        fill="none"
                        stroke="#5e5f62"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="m20.5 11.5-6 6-6-6"
                      />
                    </svg>
                  </button>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="united-states"
                    name="job-location"
                    value="united-states"
                  ></input>
                  <label htmlFor="united-states">United States</label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="canada"
                    name="job-location"
                    value="canada"
                  ></input>
                  <label htmlFor="canada">Canada</label>
                </div>
                {/* <div>
                  <input
                    type="checkbox"
                    id="other"
                    name="job-location"
                    value="other"
                  ></input>
                  <label htmlFor="other"></label>
                  <input type="text" id="otherValue" name="other"></input>
                </div> */}
              </div>

              <div>
                <button type="submit" className="submit-form">Search</button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="job-search-results">
          <div className="job-posting">
            <h2>
              Product Designer <span>-Amazon</span>
            </h2>
            <div className="job-info">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <g>
                    <path d="M31.9 54.9C19.3 54.9 9 44.6 9 32 9 19.4 19.3 9.1 31.9 9.1c12.6 0 22.9 10.3 22.9 22.9.1 12.6-10.2 22.9-22.9 22.9zm0-43.4c-11.3 0-20.4 9.2-20.4 20.4s9.2 20.4 20.4 20.4 20.4-9.2 20.4-20.4-9.1-20.4-20.4-20.4z" />
                    <path d="m39.1 43.7-8.5-8.5V19.7h2.7v14.4l7.7 7.7-1.9 1.9" />
                  </g>
                </svg>
                <p>Full-time</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <g data-name="Layer 2">
                    <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z" />
                    <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z" />
                  </g>
                </svg>
                <p>Remote- USA Only</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M25 1C11.767 1 1 11.767 1 25s10.767 24 24 24 24-10.767 24-24S38.233 1 25 1zm0 46C12.869 47 3 37.131 3 25S12.869 3 25 3s22 9.869 22 22-9.869 22-22 22z" />
                  <path d="M23 13h4c2.757 0 5 2.243 5 5h2c0-3.86-3.141-7-7-7h-1V8h-2v3h-1c-3.859 0-7 3.14-7 7v1c0 3.86 3.141 7 7 7h4c2.757 0 5 2.243 5 5v1c0 2.757-2.243 5-5 5h-4c-2.757 0-5-2.243-5-5h-2c0 3.86 3.141 7 7 7h1v3h2v-3h1c3.859 0 7-3.14 7-7v-1c0-3.86-3.141-7-7-7h-4c-2.757 0-5-2.243-5-5v-1c0-2.757 2.243-5 5-5z" />
                </svg>
                <p>$60-$90/h</p>
              </div>
            </div>
            <div className="keywords">
              <div>
                <p>Design</p>
              </div>
              <div>
                <p>User research</p>
              </div>
              <div>
                <p>Front end</p>
              </div>
              <div>
                <p>UX design</p>
              </div>
            </div>
          </div>

          <div className="job-posting">
            <h2>
              Product Designer <span>-Amazon</span>
            </h2>
            <div className="job-info">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <g>
                    <path d="M31.9 54.9C19.3 54.9 9 44.6 9 32 9 19.4 19.3 9.1 31.9 9.1c12.6 0 22.9 10.3 22.9 22.9.1 12.6-10.2 22.9-22.9 22.9zm0-43.4c-11.3 0-20.4 9.2-20.4 20.4s9.2 20.4 20.4 20.4 20.4-9.2 20.4-20.4-9.1-20.4-20.4-20.4z" />
                    <path d="m39.1 43.7-8.5-8.5V19.7h2.7v14.4l7.7 7.7-1.9 1.9" />
                  </g>
                </svg>
                <p>Full-time</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <g data-name="Layer 2">
                    <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z" />
                    <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z" />
                  </g>
                </svg>
                <p>Remote- USA Only</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M25 1C11.767 1 1 11.767 1 25s10.767 24 24 24 24-10.767 24-24S38.233 1 25 1zm0 46C12.869 47 3 37.131 3 25S12.869 3 25 3s22 9.869 22 22-9.869 22-22 22z" />
                  <path d="M23 13h4c2.757 0 5 2.243 5 5h2c0-3.86-3.141-7-7-7h-1V8h-2v3h-1c-3.859 0-7 3.14-7 7v1c0 3.86 3.141 7 7 7h4c2.757 0 5 2.243 5 5v1c0 2.757-2.243 5-5 5h-4c-2.757 0-5-2.243-5-5h-2c0 3.86 3.141 7 7 7h1v3h2v-3h1c3.859 0 7-3.14 7-7v-1c0-3.86-3.141-7-7-7h-4c-2.757 0-5-2.243-5-5v-1c0-2.757 2.243-5 5-5z" />
                </svg>
                <p>$60-$90/h</p>
              </div>
            </div>
            <div className="keywords">
              <div>
                <p>Design</p>
              </div>
              <div>
                <p>User research</p>
              </div>
              <div>
                <p>Front end</p>
              </div>
              <div>
                <p>UX design</p>
              </div>
            </div>
          </div>

          <div className="job-posting">
            <h2>
              Product Designer <span>-Amazon</span>
            </h2>
            <div className="job-info">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <g>
                    <path d="M31.9 54.9C19.3 54.9 9 44.6 9 32 9 19.4 19.3 9.1 31.9 9.1c12.6 0 22.9 10.3 22.9 22.9.1 12.6-10.2 22.9-22.9 22.9zm0-43.4c-11.3 0-20.4 9.2-20.4 20.4s9.2 20.4 20.4 20.4 20.4-9.2 20.4-20.4-9.1-20.4-20.4-20.4z" />
                    <path d="m39.1 43.7-8.5-8.5V19.7h2.7v14.4l7.7 7.7-1.9 1.9" />
                  </g>
                </svg>
                <p>Full-time</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <g data-name="Layer 2">
                    <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z" />
                    <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z" />
                  </g>
                </svg>
                <p>Remote- USA Only</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M25 1C11.767 1 1 11.767 1 25s10.767 24 24 24 24-10.767 24-24S38.233 1 25 1zm0 46C12.869 47 3 37.131 3 25S12.869 3 25 3s22 9.869 22 22-9.869 22-22 22z" />
                  <path d="M23 13h4c2.757 0 5 2.243 5 5h2c0-3.86-3.141-7-7-7h-1V8h-2v3h-1c-3.859 0-7 3.14-7 7v1c0 3.86 3.141 7 7 7h4c2.757 0 5 2.243 5 5v1c0 2.757-2.243 5-5 5h-4c-2.757 0-5-2.243-5-5h-2c0 3.86 3.141 7 7 7h1v3h2v-3h1c3.859 0 7-3.14 7-7v-1c0-3.86-3.141-7-7-7h-4c-2.757 0-5-2.243-5-5v-1c0-2.757 2.243-5 5-5z" />
                </svg>
                <p>$60-$90/h</p>
              </div>
            </div>
            <div className="keywords">
              <div>
                <p>Design</p>
              </div>
              <div>
                <p>User research</p>
              </div>
              <div>
                <p>Front end</p>
              </div>
              <div>
                <p>UX design</p>
              </div>
            </div>
          </div>

          <div className="job-posting">
            <h2>
              Product Designer <span>-Amazon</span>
            </h2>
            <div className="job-info">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <g>
                    <path d="M31.9 54.9C19.3 54.9 9 44.6 9 32 9 19.4 19.3 9.1 31.9 9.1c12.6 0 22.9 10.3 22.9 22.9.1 12.6-10.2 22.9-22.9 22.9zm0-43.4c-11.3 0-20.4 9.2-20.4 20.4s9.2 20.4 20.4 20.4 20.4-9.2 20.4-20.4-9.1-20.4-20.4-20.4z" />
                    <path d="m39.1 43.7-8.5-8.5V19.7h2.7v14.4l7.7 7.7-1.9 1.9" />
                  </g>
                </svg>
                <p>Full-time</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <g data-name="Layer 2">
                    <path d="M16,30a1,1,0,0,0,.62-.22C17,29.44,27,21.38,27,13A11,11,0,0,0,5,13c0,8.38,10,16.44,10.38,16.78A1,1,0,0,0,16,30ZM7,13a9,9,0,0,1,18,0c0,6.3-6.87,12.81-9,14.69C13.87,25.81,7,19.3,7,13Z" />
                    <path d="M21,13a5,5,0,1,0-5,5A5,5,0,0,0,21,13Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,13Z" />
                  </g>
                </svg>
                <p>Remote- USA Only</p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M25 1C11.767 1 1 11.767 1 25s10.767 24 24 24 24-10.767 24-24S38.233 1 25 1zm0 46C12.869 47 3 37.131 3 25S12.869 3 25 3s22 9.869 22 22-9.869 22-22 22z" />
                  <path d="M23 13h4c2.757 0 5 2.243 5 5h2c0-3.86-3.141-7-7-7h-1V8h-2v3h-1c-3.859 0-7 3.14-7 7v1c0 3.86 3.141 7 7 7h4c2.757 0 5 2.243 5 5v1c0 2.757-2.243 5-5 5h-4c-2.757 0-5-2.243-5-5h-2c0 3.86 3.141 7 7 7h1v3h2v-3h1c3.859 0 7-3.14 7-7v-1c0-3.86-3.141-7-7-7h-4c-2.757 0-5-2.243-5-5v-1c0-2.757 2.243-5 5-5z" />
                </svg>
                <p>$60-$90/h</p>
              </div>
            </div>
            <div className="keywords">
              <div>
                <p>Design</p>
              </div>
              <div>
                <p>User research</p>
              </div>
              <div>
                <p>Front end</p>
              </div>
              <div>
                <p>UX design</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
