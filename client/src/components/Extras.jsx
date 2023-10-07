import React from 'react'

const Extras = ({formData, setFormData}) => {
  return (
    <div className="container d-flex justify-content-center">
      <form className="row g-3">
        <div className="col-md-6">
          <label for="Language" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Languages
          </label>
          <input
            type="text"
            className="form-control"
            id="language"
            value={formData.extra_1}
            onChange={(e) => {
              setFormData({ ...formData, extra_1: e.target.value });
            }}
          />
        </div>

        <hr />
        
        <div className="col-md-6">
          <label for="interest" className="form-label" style={{ textAlign: "left", display: "block" }}>
            Interest
          </label>
          <input
            type="text"
            className="form-control"
            id="interest"
            value={formData.extra_2}
            onChange={(e) => {
              setFormData({ ...formData, extra_2: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  )
}

export default Extras