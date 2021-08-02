import React, { useState } from "react";
import info from './data/contact.json';
import Form from "./Layout/Form";
import FormSuccess from "./Layout/FormSuccess";
function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="container-fluid contenedores contact" id="contact">
      <div className="row rowse">
      <div className="col-md-5">
      <h1 className="title__general title__contact">{info[0].title}</h1>
      <h1 className="title__general title__contact title__color">{info[0].subtitle}</h1>
        <div>
          {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
        </div>
      </div>        
      <div className="col-md-1">
      </div>
      <div className="col-md-6">
      <img src={info[0].img_src} className="img__contact" alt="25watts"/>
      </div>
    </div>
  </div>
  );
}

export default Contact;
