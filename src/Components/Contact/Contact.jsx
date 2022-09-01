import React from "react";
import "./Contact.scss";
import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done,setDone] = useState(false);
  const formBtn = (e) => {
    e.preventDefault();
    if (
      e.target[0].value.length > 0 &&
      e.target[1].value.length > 0 &&
      e.target[2].value.length > 0
    ) {
      let botMessege = `
Salom Asilbek, Yangi Xabar!😊%0A
Ismi 👤: ${e.target[0].value}%0A
Raqam ☎: ${e.target[1].value}%0A 
Xabar ☎: ${e.target[2].value}%0A              
                `;
      //  console.log(botMessege)

      let url = `https://api.telegram.org/bot5486634028:AAHI_5CAe6SIpKbNNHIdwu6W7tU4kANPX4k/sendMessage?chat_id=1328407566&text=${botMessege}`;
      async function fetchAsync(url) {
        let response = await fetch(url);
        let data = await response.json();
        return data;
      }
      fetchAsync(url);
      e.target[0].value = "";

      e.target[1].value = "";

      e.target[2].value = "";
    } else {
      return -1;
    }
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_17gh2pf",
  //       "template_j04wrns",
  //       form.current,
  //       "bjhge5J4SbDsYJKls"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={formBtn} className="f-form">
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
