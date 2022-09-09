import React, { FormEvent, MutableRefObject, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef() as MutableRefObject<HTMLFormElement>;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => console.log("Form is sent"))
      .catch((error) => console.log(error));
  };

  return (
    <form
      ref={form}
      className="form__container h-full"
      onSubmit={(e) => onSubmit(e)}
    >
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
        className="uppercase border-[1px] border-white px-4 py-2 rounded-3xl text-primary-100 animate-pulse"
        type="submit"
        value="Send message"
      />
    </form>
  );
};

export default ContactForm;
