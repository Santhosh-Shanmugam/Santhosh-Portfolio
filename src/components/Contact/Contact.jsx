import React, { useContext, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n98r5kg",
        "template_sqzmtw9",
        form.current,
        "FMMONw9VhTdLJaqAs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subheading" style={{ color: darkMode ? "white" : "" }}>Reach out through any platform or send a message directly.</p>
      
      <div className="contact-container">
        {/* Left side for contact cards */}
        <div className="c-left">
          <div className="contact-cards-container">
            <div className="contact-card github">
              <FaGithub size={32} />
              <a
                href="https://github.com/Santhosh-Shanmugam"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                GitHub
              </a>
            </div>

            <div className="contact-card linkedin">
              <FaLinkedin size={32} />
              <a
                href="https://www.linkedin.com/in/santhosh-s-167110254/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn
              </a>
            </div>

            <div className="contact-card whatsapp">
              <FaWhatsapp size={32} />
              <a
                href="https://wa.me/919345645016"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                WhatsApp
              </a>
            </div>
            {/* <div className="contact-card whatsapp">
              <FaMailBulk size={32} />
              <a
                href="https://wa.me/919345645016"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Gmail.com
              </a>
            </div> */}
          </div>
        </div>

        {/* Right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            {/* <input type="text" name="user_name" className="user" placeholder="Name" required />
            <input type="email" name="user_email" className="user" placeholder="Email" required /> */}
            <input name="message" className="user" placeholder="Message" required></input>
            <input type="submit" value="Send" className="button-contact" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
