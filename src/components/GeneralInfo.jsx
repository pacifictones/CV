import { useState, useTransition } from "react";
import Display from "./Display";
import Education from "./Education";
import Experience from "./Experience";

function GeneralInfo() {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");
  const [savedEmail, setSavedEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [phoneNumber, setPhoneNumber] = useState();
  const [savedPhoneNumber, setSavedPhoneNumber] = useState("");

  //Educations Variables:

  const [schoolName, setSchoolName] = useState("");
  const [savedSchoolName, setSavedSchoolName] = useState("");

  const [major, setMajor] = useState("");
  const [savedMajor, setSavedMajor] = useState("");

  const [gradDate, setGradDate] = useState("");
  const [savedGradDate, setSavedGradDate] = useState("");

  //Experience variables:
  const [jobs, setJobs] = useState([]);

  const [companyName, setCompanyName] = useState("");

  const [jobTitle, setJobTitle] = useState("");

  const [jobDescription, setJobDescription] = useState("");

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavedName(name);
    setSavedPhoneNumber(phoneNumber);
    setSavedEmail(email);
  };

  const handleEducationSubmit = (event) => {
    event.preventDefault();
    setSavedSchoolName(schoolName);
    setSavedGradDate(gradDate);
    setSavedMajor(major);
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  function handleSchoolNameChange(event) {
    setSchoolName(event.target.value);
  }

  function handleGradDateChange(event) {
    setGradDate(event.target.value);
  }

  function handleMajorChange(event) {
    setMajor(event.target.value);
  }

  //functions for Experience:

  const handleExperienceSubmit = (event) => {
    event.preventDefault();
    const newExperience = {
      business: companyName,
      title: jobTitle,
      description: jobDescription,
      start: startDate,
      end: endDate,
    };

    setJobs((j) => [...j, newExperience]);
  };

  function handleCompanyNameChange(event) {
    setCompanyName(event.target.value);
  }
  function handleJobTitleChange(event) {
    setJobTitle(event.target.value);
  }
  function handleJobDescriptionChange(event) {
    setJobDescription(event.target.value);
  }
  function handleStartDateChange(event) {
    setStartDate(event.target.value);
  }
  function handleEndDateChange(event) {
    setEndDate(event.target.value);
  }

  function deleteJob(index) {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
  }

  function editJob(index) {}

  return (
    <div className="container">
      <div className="input">
        <h1>General Information</h1>
        <ol>
          <li>
            <input
              type="text"
              placeholder="Name..."
              value={name}
              onChange={handleNameChange}
            />
          </li>
          <li>
            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={handleEmailChange}
            />
          </li>
          <li>
            <input
              type="number"
              placeholder="Phone number.."
              value={phoneNumber}
              onChange={handleNumberChange}
            />
          </li>
          <button className="submit-general-info" onClick={handleSubmit}>
            Submit
          </button>
        </ol>

        <Education
          schoolName={schoolName}
          gradDate={gradDate}
          major={major}
          handleSchoolNameChange={handleSchoolNameChange}
          handleGradDateChange={handleGradDateChange}
          handleMajorChange={handleMajorChange}
          handleEducationSubmit={handleEducationSubmit}
        />

        <Experience
          companyName={companyName}
          jobTitle={jobTitle}
          jobDescription={jobDescription}
          startDate={startDate}
          endDate={endDate}
          handleCompanyNameChange={handleCompanyNameChange}
          handleJobTitleChange={handleJobTitleChange}
          handleJobDescriptionChange={handleJobDescriptionChange}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          handleExperienceSubmit={handleExperienceSubmit}
        />
      </div>
      <Display
        name={savedName}
        email={savedEmail}
        number={savedPhoneNumber}
        schoolName={savedSchoolName}
        major={savedMajor}
        gradDate={savedGradDate}
        deleteJob={deleteJob}
        jobs={jobs}
      />
    </div>
  );
}

export default GeneralInfo;
