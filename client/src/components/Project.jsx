import React from "react";

const Project = ({ formData, setFormData }) => {
  
  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="name" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Project 1
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.proj1_title}
            onChange={(e) => {
              setFormData({ ...formData, proj1_title: e.target.value });
            }}
          />
        </div>

        <div className="col-md-6">
          <label for="url" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Link 
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            value={formData.proj1_link}
            onChange={(e) => {
              setFormData({ ...formData, proj1_link: e.target.value });
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
            value={formData.proj1_desc}
            onChange={(e) => {
              setFormData({ ...formData, proj1_desc: e.target.value });
            }}
          />
        </div>
        <hr />
        <div className="col-md-6">
          <label for="name" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Project 2
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.proj2_title}
            onChange={(e) => {
              setFormData({ ...formData, proj2_title: e.target.value });
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="url" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Link 
          </label>
          <input
            type="email"
            className="form-control"
            id="url"
            value={formData.proj2_link}
            onChange={(e) => {
              setFormData({ ...formData, proj2_link: e.target.value });
            }}
          />
        </div>

        <div className="col-12">
          <label for="edu1_desc" className="form-label" style={{ textAlign: "left", display: "block" }} >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={formData.proj2_desc}
            onChange={(e) => {
              setFormData({ ...formData, proj2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Project;