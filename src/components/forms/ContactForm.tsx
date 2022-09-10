import React, { FormEvent, MutableRefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Dialog } from "@headlessui/react";

const ContactForm = () => {
  const form = useRef() as MutableRefObject<HTMLFormElement>;
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => setIsOpen(true))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form
        ref={form}
        className="form__container h-full relative"
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          className="form__input"
          type="text"
          name="name"
          id="input__name"
          placeholder="Name"
          required
        />
        <input
          className="form__input"
          type="email"
          name="email"
          id="input__email"
          placeholder="Email"
          required
        />
        <input
          className="form__input"
          type="text"
          name="subject"
          id="input__subject"
          placeholder="Subject"
          required
        />
        <textarea
          className="form__input"
          name="message"
          id="input__message"
          cols={30}
          rows={5}
          placeholder="Message"
          required
        />
        <input
          className="uppercase border-[1px] border-white px-4 py-2 rounded-3xl text-primary-100 animate-pulse cursor-pointer"
          type="submit"
          value="Send message"
        />
      </form>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="absolute inset-0 w-full h-full backdrop-blur"></div>
        <Dialog.Panel className="w-[90%] h- absolute top-0 bottom-0 right-0 left-0  mx-auto my-auto lg:w-fit h-fit">
          <div className="py-12 px-6 lg:p-12 bg-slate-800/80 rounded-lg flex flex-col gap-12 items-center">
            <Dialog.Title className="text-3xl font-bold tracking-wide text-center">
              You successfully submitted the message!
            </Dialog.Title>
            <div className="text-center text-2xl font-light tracking-wide">
              <p>Thank you for contacting me.</p>
              <p>I&apos;ll email you as soon as possible.</p>
              <p className="mt-3">Enjoy your day!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-xl bg-slate-50 text-slate-900 py-3 px-6 rounded-3xl tracking-wide font-semibold"
            >
              Got it, thanks!
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default ContactForm;
