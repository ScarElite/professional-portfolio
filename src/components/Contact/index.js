import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Something went wrong :sweat_smile:",
            text: error.text,
          });
        }
      );
  };
  return (
    <div>
      <h1>Contact Form</h1>
      <form className="cf" ref={form} onSubmit={sendEmail}>
        <div className="half left cf">
          <input type="text" placeholder="Name" name="user_name" />
          <input type="email" placeholder="Email address" name="user_email" />
        </div>
        <div className="half right cf">
          <textarea name="message" type="text" placeholder="Message"></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
    </div>
  );
};

export default Contact;
