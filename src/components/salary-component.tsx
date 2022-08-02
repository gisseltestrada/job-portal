import React from "react";
import  PropTypes from "prop-types";

export default function SalaryComponent(props: {
    // average: number |string; salaries: unknown[];
    salary: string|number;
}) {


  return (
    <div>
        {/* <div className="average-salary">
            <h3>Average Salary</h3>
          <p>{props.average}</p>
        </div> */}
        {/* <h4>List of Salaries</h4> */}
        <div className="salary">{props.salary}</div>
    </div>
  );
}

SalaryComponent.propTypes = {
    // average: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
}