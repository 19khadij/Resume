import React from "react";

const Experiences = ({ formData, setFormData }) => {
  
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Company 1
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.exp1_org}
            onChange={(e) => {
              setFormData({ ...formData, exp1_org: e.target.value });
            }}
          />
        </div>

        <div className="col-md-6">
          <label for="desg" className="form-label">
            Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="desg"
            value={formData.exp1_pos}
            onChange={(e) => {
              setFormData({ ...formData, exp1_pos: e.target.value });
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
            value={formData.exp1_dur}
            onChange={(e) => {
              setFormData({ ...formData, exp1_dur: e.target.value });
            }}
          />
        </div>
        <div className="col-12">
          <label for="edu1_desc" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Job Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={formData.exp1_desc}
            onChange={(e) => {
              setFormData({ ...formData, exp1_desc: e.target.value });
            }}
          />
        </div>
        <hr />
        <div className="col-md-6">
          <label for="name" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Company 2
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.exp2_org}
            onChange={(e) => {
              setFormData({ ...formData, exp2_org: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="desg" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="desg"
            value={formData.exp2_pos}
            onChange={(e) => {
              setFormData({ ...formData, exp2_pos: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="dur" className="form-label">
          Duration "Day/Month/Year"
          </label>
          <input
            type="text"
            className="form-control"
            id="dur"
            value={formData.exp2_dur}
            onChange={(e) => {
              setFormData({ ...formData, exp2_dur: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label">
            Job Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={formData.exp2_desc}
            onChange={(e) => {
              setFormData({ ...formData, exp2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Experiences;