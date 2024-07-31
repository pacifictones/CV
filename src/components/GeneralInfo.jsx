import { useState, useTransition } from "react";
import Display from "./Display";
import Education from "./Education";
import Experience from "./Experience";
import html2canvas from "html2canvas";

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

  //Education State:

  const [schools, setSchools] = useState([]);
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [gradDate, setGradDate] = useState("");
  const [editingSchool, setEditingSchool] = useState(null);

  //Experience State:
  const [jobs, setJobs] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavedName(name);
    setSavedPhoneNumber(phoneNumber);
    setSavedEmail(email);
  };

  // Education Handlers
  const handleEducationSubmit = (event) => {
    event.preventDefault();
    const newSchool = { schoolName, major, gradDate };
    if (editingSchool != null) {
      const updatedSchools = schools.map((school, index) =>
        index === editingSchool ? newSchool : school
      );
      setSchools(updatedSchools);
      setEditingSchool(null);
    } else {
      setSchools((prevSchools) => [...prevSchools, newSchool]);
    }
    setSchoolName("");
    setMajor("");
    setGradDate("");
  };

  const handleEditSchool = (index) => {
    const school = schools[index];
    setSchoolName(school.schoolName);
    setMajor(school.major);
    setGradDate(school.gradDate);
    setEditingSchool(index);
  };

  const handleDeleteSchool = (index) => {
    setSchools(schools.filter((_, i) => i !== index));
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleNumberChange(event) {
    setPhoneNumber(event.target.value);
  }

  // function handleSchoolNameChange(event) {
  //   setSchoolName(event.target.value);
  // }

  // function handleGradDateChange(event) {
  //   setGradDate(event.target.value);
  // }

  // function handleMajorChange(event) {
  //   setMajor(event.target.value);
  // }

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

    if (editingIndex !== null) {
      setJobs((j) =>
        j.map((job, index) => (index === editingIndex ? newExperience : job))
      );
      setEditingIndex(null);
    } else {
      setJobs((j) => [...j, newExperience]);
    }

    setCompanyName("");
    setJobTitle("");
    setJobDescription("");
    setStartDate("");
    setEndDate("");
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

  function editJob(index) {
    const job = jobs[index];
    setCompanyName(job.business);
    setJobTitle(job.title);
    setJobDescription(job.description);
    setStartDate(job.start);
    setEndDate(job.end);
    setEditingIndex(index);
  }

  // const generatePDF = () => {
  //   const input = displayRef.current;
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "PNG", 0, 0);
  //     pdf.save("cv.pdf");
  //   });
  // };

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
            Update
          </button>
        </ol>

        <Education
          schoolName={schoolName}
          gradDate={gradDate}
          major={major}
          handleSchoolNameChange={(e) => setSchoolName(e.target.value)}
          handleGradDateChange={(e) => setGradDate(e.target.value)}
          handleMajorChange={(e) => setMajor(e.target.value)}
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
        schools={schools}
        handleEditSchool={handleEditSchool}
        handleDeleteSchool={handleDeleteSchool}
        deleteJob={deleteJob}
        editJob={editJob}
        jobs={jobs}
      />
      {/* <button onClick={generatePDF}>Generate PDF</button> */}
    </div>
  );
}

export default GeneralInfo;
