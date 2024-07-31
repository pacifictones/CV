import React, { forwardRef } from "react";
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
        <h2>Education</h2>
        <ul>
          {props.schools.map((school, index) => (
            <li key={index}>
              <p>School: {school.schoolName}</p>
              <p>Major: {school.major}</p>
              <p>Graduation Date: {school.gradDate}</p>
              <button onClick={() => props.handleEditSchool(index)}>
                Edit
              </button>
              <button onClick={() => props.handleDeleteSchool(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="experience">
        <h2>Experience</h2>
        <ul>
          {props.jobs.map((job, index) => (
            <li key={index}>
              <p>Company Name: {job.business}</p>
              <p>Job Title: {job.title}</p>
              <p>Job Description: {job.description}</p>
              <p>Start Date: {job.start}</p>
              <p>End Date: {job.end}</p>
              <button onClick={() => props.editJob(index)}>Edit</button>
              <button onClick={() => props.deleteJob(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Display;
