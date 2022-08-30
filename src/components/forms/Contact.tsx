import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="flex flex-col justify-evenly w-[80%] h-[90%] md:max-w-xl">
      <h2 className="text-3xl text-center font-semibold">Contact me</h2>
      <p className="text-center text-lg font-light">
        I’m interested in freelance opportunities – especially ambitious or
        large projects. However, if you have other request or question, don’t
        hesitate to use the form.
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
