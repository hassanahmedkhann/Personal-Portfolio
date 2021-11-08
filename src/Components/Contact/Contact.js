import React from "react";
import "./Contact.css";
import pi from "../Images/pi.png";
import ei from "../Images/ei.png";
import li from "../Images/li.png";
import git from "../Images/git.png";

import { useState, useEffect } from "react";

function Contact() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5050) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);
  const [flag, setflag] = useState(true);

  function handleSubmit(e) {
    const form = document.querySelector(".theform");
    e.preventDefault();

    setflag(false);
    setTimeout(() => {
      setflag(true);
    }, 3000);
    form.reset();
  }

  return (
    <>
      <div id="contactme" className="main-contact container-fluid">
        <div className={`leftcontact child ${show && "slide"}`}>
          <div className="lefttextwrap">
            <span className="fazul">Get in touch with me!</span>
            <div className="iconwrap">
              <a
                style={{
                  display: "flex",
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "600",
                }}
                href="mailto: itshakhere@gmail.com"
                alt=""
              >
                {" "}
                <img className="icon" alt="img" src={ei} />
                <h4>itshakhere@gmail.com</h4>
              </a>
            </div>
            <div className="iconwrap">
              <img alt="img" className="icon" src={pi} />
              <h4 className="texthover">0330-2564568</h4>
            </div>
            <div className="iconwrap">
              <img alt="img" className="icon" src={li} />
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://www.linkedin.com/in/hassan-ahmed-khan-937210202/"
              >
                <h4 className="texthover">LinkedIn</h4>
              </a>
            </div>
            <div className="iconwrap">
              <img alt="img" className="icon" src={git} />
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://github.com/hassanahmedkhann"
              >
                <h4 className="texthover">Github</h4>
              </a>
            </div>
          </div>
        </div>
        <div className={`rightcontact child  ${show && "slide2"}`}>
          <form onSubmit={handleSubmit} className="theform">
            <h1>Send me a Message.</h1>
            <input
              placeholder="Email"
              type="email"
              className="input"
              name="user_email"
            />

            <input
              placeholder="Name"
              type="text"
              className="input"
              name="user_name"
            />

            <textarea placeholder="Your Message" rows="5" name="message" />
            {flag && (
              <button
                type="submit"
                className="btn btn-secondary movebtn sendbtn"
              >
                Send!
              </button>
            )}
            {!flag && (
              <button type="submit" className="btn btn-success movebtn sendbtn">
                Sent!
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
