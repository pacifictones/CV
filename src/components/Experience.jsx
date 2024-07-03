import React from "react";

function Experience(props) {
  return (
    <div>
      <h1>Experience: </h1>
      <ol>
        <li>
          <input
            type="text"
            placeholder="Company Name..."
            value={props.companyName}
            onChange={props.handleCompanyNameChange}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Job title..."
            value={props.jobTitle}
            onChange={props.handleJobTitleChange}
          />
        </li>
        <li>
          <input
            type="text"
            placeholder="Responsibility..."
            value={props.jobDescription}
            onChange={props.handleJobDescriptionChange}
          />
        </li>
        <li>
          <input
            type="date"
            placeholder="From..."
            value={props.startDate}
            onChange={props.handleStartDateChange}
          />
        </li>
        <li>
          <input
            type="date"
            placeholder="To..."
            value={props.endDate}
            onChange={props.handleEndDateChange}
          />
        </li>
        <button
          className="submit-education-info"
          onClick={props.handleExperienceSubmit}
        >
          Submit
        </button>
      </ol>
    </div>
  );
}

export default Experience;
