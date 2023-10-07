import React from "react";

const Education = ({ formData, setFormData }) => {
  
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Institute 1
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.edu1_school}
            onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="dur" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Duration "Day/Month/Year"
          </label>
          <input
            type="email"
            className="form-control"
            id="dur"
            value={formData.edu1_year}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="deg" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Degree 
          </label>
          <input
            type="text"
            className="form-control"
            id="deg"
            value={formData.edu1_qualificatin}
            onChange={(e) => {
              setFormData({ ...formData, edu1_qualificatin: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={formData.edu1_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu1_desc: e.target.value });
            }}
          />
        </div>
        <hr />
        <div className="col-md-6">
          <label for="name" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Institute 2
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.edu2_school}
            onChange={(e) => {
              setFormData({ ...formData, edu2_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="dur" className="form-label" style={{ textAlign: "left", display: "block" }}>
          Duration "Day/Month/Year"
          </label>
          <input
            type="text"
            className="form-control"
            id="dur"
            value={formData.edu2_year}
            onChange={(e) => {
              setFormData({ ...formData, edu2_year: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="deg" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Degree 
          </label>
          <input
            type="text"
            className="form-control"
            id="deg"
            value={formData.edu2_qualificatin}
            onChange={(e) => {
              setFormData({ ...formData, edu2_qualificatin: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.edu2_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;