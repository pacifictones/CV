import { useState } from "react";
import GeneralInfoInput from "./GeneralInfoInput";

function GeneralInfo() {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [phoneNumber, setPhoneNumber] = useState();

  // function addGeneralInfo() {}

  // function editGeneralInfo() {}

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleEmailChange(event) {
    setName(event.target.value);
  }
  function handleNumberChange(event) {
    setName(event.target.value);
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
          <button className="submit-general-info" onClick={handleNumberChange}>
            Submit
          </button>
        </ol>
      </div>

      <div className="out-put">
        <ol>
          <li>
            <span>{name}</span>
          </li>
          <li>
            <span>{email}</span>
          </li>
          <li>
            <span>{phoneNumber}</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default GeneralInfo;
