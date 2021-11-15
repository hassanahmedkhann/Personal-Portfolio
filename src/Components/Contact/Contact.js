import React from "react";
import "./Contact.css";
import pi from "../Images/pi.png";
import ei from "../Images/ei.png";
import li from "../Images/li.png";
import git from "../Images/git.png";
import { db } from "../../firebase-config";
import { useState, useEffect } from "react";
import { doc, setDoc } from "@firebase/firestore";

function Contact() {
  const [show, setshow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  // const dbRef = collection(db, "Messages");

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

  const handlesend = async (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Message: msg,
    };
    const thedoc = doc(db, "Messages", email);

    // await addDoc(dbRef, data);
    await setDoc(thedoc, data, { merge: true });
    setflag(false);
    setTimeout(() => {
      setflag(true);
    }, 3000);
    const form = document.querySelector(".theform");
    form.reset();
    return;
  };

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
                <img className="icon" alt="img" src={ei} />
                <h4>itshakhere@gmail.com</h4>
              </a>
            </div>
            <div className="iconwrap">
              <img className="icon" src={pi} alt="img" />
              <h4 className="texthover">0330-2564568</h4>
            </div>
            <div className="iconwrap">
              <img className="icon" src={li} alt="img" />
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://www.linkedin.com/in/hassan-ahmed-khan-937210202/"
              >
                <h4 className="texthover">LinkedIn</h4>
              </a>
            </div>
            <div className="iconwrap">
              <img className="icon" src={git} alt="img" />
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
          <form onSubmit={handlesend} className="theform">
            <h1>Send me a Message.</h1>
            <input
              placeholder="Email"
              type="email"
              className="input"
              required
              onChange={(event) => setEmail(event.target.value)}
            />

            <input
              required
              placeholder="Name"
              type="text"
              className="input"
              onChange={(event) => setName(event.target.value)}
            />

            <textarea
              required
              placeholder="Your Message"
              rows="5"
              onChange={(event) => setMsg(event.target.value)}
            />
            {flag && (
              <button
                type="submit"
                className="btn btn-secondary movebtn sendbtn"
              >
                Send!
              </button>
            )}
            {!flag && (
              <span type="submit" className="btn btn-success movebtn sendbtn">
                Sent!
              </span>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
