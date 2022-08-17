import React from "react";
import PropTypes from "prop-types";
import "./salary-component.css";

export default function SalaryComponent(props: {
  // average: number |string; salaries: unknown[];
  salaries: number[] | null;
  average: string | null;
  company: string | null;
  occupancy: string | null;
}) {
  return (
    <div>
      <h1 className="job-name">
        {props.occupancy} <span>{" - "}</span>
      </h1>

      <div className="salary-grid">
        <div className="high">
          <p>Highest Salary</p>
          <h2>
            $ 
            {/* {props.salaries && props.salaries[props.salaries.length - 1]} */}
            {props.salaries?  
              Math.round(props.salaries[props.salaries.length - 1]/1000)+"K": "-"}
          </h2>
        </div>
        <div className="average">
          <p>Average Salary</p>
          <h2>${props.average? Math.round(Number(props.average)/1000)+"K": "-"}</h2>
        </div>
        <div className="low">
          <p>Lowest Salary</p>
          <h2>
            ${props.salaries ? Math.round(props.salaries[0] / 1000) + "K" : "-"}
            {/* {props.salaries && props.salaries[0]} */}
          </h2>
        </div>
        <div className="left">{/* <p>Lower Box 1</p> */}</div>
        <div className="right">{/* <p>Lower Box 2</p> */}</div>
      </div>
    </div>
  );
}

SalaryComponent.propTypes = {
  average: PropTypes.string.isRequired,
  salaries: PropTypes.array.isRequired,
  company: PropTypes.string.isRequired,
  occupancy: PropTypes.string.isRequired,
};
