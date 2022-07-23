import React from "react";
import "./Contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17gh2pf",
        "template_j04wrns",
        form.current,
        "bjhge5J4SbDsYJKls"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail} className='f-form'>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" className="button mybutton" />
          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur blur1"
            style={{
              background: "var(--purple)",
              left: "26%",
              top: "48%",
              width: "22rem",
              height: "14rem",
              filter: "blur(90px)",
            }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
