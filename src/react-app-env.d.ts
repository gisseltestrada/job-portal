/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    REACT_APP_JOB_PORTAL_URL: "http://localhost:4200/api/v1/users";
    REACT_APP_CREATE_USER_ENDPOINT: "/createNewUser";
  }
}