import React from "react";

function Display(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Number: {props.number}</p>
      <p>School: {props.schoolName}</p>
      <p>Major: {props.major}</p>
      <p>Date: {props.gradDate}</p>
      <p>Company Name: {props.companyName}</p>
      <p>Job Title: {props.jobTitle}</p>
      <p>Job Description: {props.jobDescription}</p>
      <p>From: {props.startDate}</p>
      <p>To: {props.endDate}</p>
    </div>
  );
}

export default Display;
