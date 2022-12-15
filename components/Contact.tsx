import React from "react";
import { useEffect, useRef } from "react";
import { initializeEmailSender } from "../emailjs";
import emailjs from "@emailjs/browser";

type Props = {};

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_ii8730g",
        form.current,
        "aJiAbKjGJlcqEn2mh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label className="block">Name</label>
        <input className="block" type="text" name="user_name" />
        <label className="block">Email</label>
        <input className="block" type="email" name="user_email" />
        <label className="block">Message</label>
        <textarea className="block" name="message" />
        <input disabled className="block" type="submit" value="Send" />
      </form>
    </div>
  );
}
