import React from "react";
import Experience from "./Experience";

function Display(props) {
  return (
    <div className="out-put">
      <div className="gen-info">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Number: {props.number}</p>
      </div>
      <hr />
      <div className="education">
        <p>School: {props.schoolName}</p>
        <p>Major: {props.major}</p>
        <p>Date: {props.gradDate}</p>
      </div>
      <hr />
      <div className="experience">
        <ul>
          {props.jobs.map((job, index) => (
            <li key={index}>
              <p>Company Name: {job.business}</p>
              <p>Job Title: {job.title}</p>
              <p>Job Description: {job.description}</p>
              <p>Start Date: {job.start}</p>
              <p>End Date: {job.end}</p>
              <button>edit</button>
              <button
                className="delete-button"
                onClick={() => {
                  props.deleteJob(index);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        {/* <p>Company Name: {props.companyName}</p>
        <p>Job Title: {props.jobTitle}</p>
        <p>Job Description: {props.jobDescription}</p>
        <p>From: {props.startDate}</p>
        <p>To: {props.endDate}</p> */}
      </div>
    </div>
  );
}

export default Display;
