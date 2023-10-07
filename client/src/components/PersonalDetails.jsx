import React, { useState } from "react";

const PersonalDetails = ({ formData, setFormData }) => {
  const [emailError, setEmailError] = useState(""); // State to manage the email error message
  // name: "",
  // email: "",
  // phone: "",
  // linkedin: "",
  // github: "",
  // skills: "",
  const handleEmailChange = (e) => {
    const enteredValue = e.target.value;
    setFormData({ ...formData, email: enteredValue });

    // Validate the entered email using a regular expression
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValidEmail = emailRegex.test(enteredValue);

    // Update the email error message state
    setEmailError(isValidEmail ? "" : "Invalid email address");
  };
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label
            for="name"
            className="form-label"
            style={{ textAlign: "left", display: "block" }}
          >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label
            for="Email"
            className="form-label"
            style={{ textAlign: "left", display: "block" }}
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            value={formData.email}
            onChange={handleEmailChange}
          />
          <div id="email-error-message" style={{ color: "red" }}>
            {emailError}
          </div>
        </div>
        <div className="col-md-6">
          <label
            for="Phone"
            className="form-label"
            style={{ textAlign: "left", display: "block" }}
          >
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="Phone"
            value={formData.phone}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
              setFormData({ ...formData, phone: numericValue });
              //<div id="error-message" style={{ color: 'red' }}> Enter numbers</div>
            }}
          />
          {/* <div id="error-message" style={{ color: 'red' }}> Enter numbers</div> */}
        </div>
        <div className="col-12">
          <label
            for="github"
            className="form-label"
            style={{ textAlign: "left", display: "block" }}
          >
            Github
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            placeholder="https://github/YOURUSERNAME"
            value={formData.github}
            onChange={(e) => {
              setFormData({ ...formData, github: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label
            for="Linkedin"
            className="form-label"
            style={{ textAlign: "left", display: "block" }}
          >
            LinkedIn
          </label>
          <input
            type="text"
            className="form-control"
            id="Linkedin"
            placeholder="https://linkedIn/YOURUSERNAME"
            value={formData.linkedin}
            onChange={(e) => {
              setFormData({ ...formData, linkedin: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label
            htmlfor="Skills"
            className="form-label"
            style={{ textAlign: "left", display: "block" }}
          >
            Skills
          </label>
          <input
            type="text"
            className="form-control"
            id="Skills"
            placeholder="Enter Skills and separate them with using commas"
            value={formData.skills}
            onChange={(e) => {
              setFormData({ ...formData, skills: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
