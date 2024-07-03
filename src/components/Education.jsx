import React from "react";

function Education(props) {
  return (
    <div>
      <h1>Education:</h1>
      <ol>
        <li>
          <input
            type="text"
            placeholder="School Name..."
            value={props.schoolName}
            onChange={props.handleSchoolNameChange}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Degree..."
            value={props.major}
            onChange={props.handleMajorChange}
          />
        </li>
        <li>
          <input
            type="date"
            placeholder="Graduation Date..."
            value={props.gradDate}
            onChange={props.handleGradDateChange}
          />
        </li>

        <button
          className="submit-education-info"
          onClick={props.handleEducationSubmit}
        >
          Submit
        </button>
      </ol>
    </div>
  );
}
export default Education;
