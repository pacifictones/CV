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
  const [companyName, setCompanyName] = useState("");
  const [savedCompanyName, setSavedCompanyName] = useState("");

  const [jobTitle, setJobTitle] = useState("");
  const [savedJobTitle, setSavedJobTitle] = useState("");

  const [jobDescription, setJobDescription] = useState("");
  const [savedJobDescription, setSavedJobDescription] = useState("");

  const [startDate, setStartDate] = useState("");
  const [savedStartDate, setSavedStartDate] = useState("");

  const [endDate, setEndDate] = useState("");
  const [savedEndDate, setSavedEndDate] = useState("");

  // function addGeneralInfo() {}

  // function editGeneralInfo() {}

  function handleNameChange(event) {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavedName(name);
    //setName("");
    setSavedPhoneNumber(phoneNumber);
    //setPhoneNumber("");
    setSavedEmail(email);
    //setEmail("");
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
    setSavedCompanyName(companyName);
    setSavedJobTitle(jobTitle);
    setSavedJobDescription(jobDescription);
    setSavedStartDate(startDate);
    setSavedEndDate(endDate);
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

  return (
    <div className="container">
      <div>
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
        companyName={savedCompanyName}
        jobTitle={savedJobTitle}
        jobDescription={savedJobDescription}
        startDate={savedStartDate}
        endDate={savedEndDate}
      />
    </div>
  );
}

export default GeneralInfo;
