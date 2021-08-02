import React from "react";
import ValidateForm from "./ValidateForm";
import validate from "./Validate";

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = ValidateForm(
    submitForm,
    validate
  );
  return (
    <div>
      <div className="form-content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-inputs">
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
              />
              {errors.name && (
                <small className="input-error">{errors.name}</small>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-inputs">
              <input
                type="email"
                name="email"
                id="email"
                className="form-input"
                placeholder="Email address"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="input-error">{errors.email}</small>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-inputs">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-input"
                minLength="8"
                maxLength="10"
                autoComplete="none"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
              ></input>
              {errors.phone && (
                <small className="input-error">{errors.phone}</small>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-inputs">
              <textarea
                name="comment"
                className="form-input"
                id="comment"
                rows="3"
                minLength="10"
                placeholder="Message"
                value={values.comment}
                onChange={handleChange}
              ></textarea>
              {errors.comment && (
                <small className="input-error">{errors.comment}</small>
              )}
            </div>
          </div>
          <div className="form-row" id="form-contain-btn">
            <button className="btn__general" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
