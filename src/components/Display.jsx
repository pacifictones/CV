import React, { forwardRef } from "react";
import Experience from "./Experience";

const Display = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="out-put">
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
              <button onClick={() => props.editJob(index)}>Edit</button>
              <button
                className="delete-button"
                onClick={() => {
                  props.deleteJob(index);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Display;
