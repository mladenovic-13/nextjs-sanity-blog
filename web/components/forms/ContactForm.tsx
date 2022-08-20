import React from "react";

const ContactForm = () => {
  const onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <form className="form__container">
      <input
        className="form__input"
        type="text"
        name="name"
        id="input__name"
        placeholder="Name"
      />
      <input
        className="form__input"
        type="email"
        name="email"
        id="input__email"
        placeholder="Email"
      />
      <input
        className="form__input"
        type="text"
        name="subject"
        id="input__subject"
        placeholder="Subject"
      />
      <textarea
        className="form__input"
        name="message"
        id="input__message"
        cols={30}
        rows={5}
        placeholder="Message"
      />
      <input
        className="uppercase border-2 border-primary-900 px-3 py-2 rounded-md text-primary-100 font-semibold animate-pulse"
        type="submit"
        value="Send message"
      />
    </form>
  );
};

export default ContactForm;
