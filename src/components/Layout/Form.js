import React from "react";
import ValidateForm from "./ValidateForm";
import validate from "./Validate";

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = ValidateForm(
    submitForm,
    validate
  );

  function keyUpHandler(elem, e, i) {
    elem.target.value = elem.target.value.replace(/[^0-9]/g, "");

    while (elem.target.value.charAt(0) === "0") {
      elem.target.value = elem.target.value.substr(1);
    }
    const tel = document.getElementById("phone");
    switch (elem.target.value.length) {
      case 2:
        tel.setAttribute("maxLength", 8);
        tel.setAttribute("minLength", 8);
        break;
      case 3:
        tel.setAttribute("maxLength", 7);
        tel.setAttribute("minLength", 7);
        break;
      case 4:
        tel.setAttribute("maxLength", 6);
        tel.setAttribute("minLength", 6);
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="form-content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-inputs">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-input"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="input-error">{errors.name}</small>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input"
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
              <label htmlFor="area_code" className="form-label">
                Código de área
              </label>
              <input
                type="tel"
                name="area_code"
                id="area_code"
                className="form-input"
                minLength="2"
                maxLength="4"
                autoComplete="none"
                value={values.area_code}
                onChange={handleChange}
                onKeyUp={keyUpHandler}
              ></input>
              {errors.area_code && (
                <small className="input-error">{errors.area_code}</small>
              )}
            </div>
            <div className="form-inputs">
              <label htmlFor="phone" className="form-label">
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-input"
                minLength="6"
                maxLength="8"
                autoComplete="none"
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
              <label htmlFor="comment" className="form-label">
                Message
              </label>
              <textarea
                name="comment"
                className="form-input"
                id="comment"
                rows="3"
                minLength="10"
                value={values.comment}
                onChange={handleChange}
              ></textarea>
              {errors.comment && (
                <small className="input-error">{errors.comment}</small>
              )}
            </div>
          </div>
          <div className="form-row" id="form-contain-btn">
            <button className="form-input-btn" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
