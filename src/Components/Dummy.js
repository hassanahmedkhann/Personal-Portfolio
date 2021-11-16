import React from "react";
import "./Dummy.css";
import fb from "./Images/fb.png";
import insta from "./Images/insta.png";
import li from "./Images/li.png";
import em from "./Images/ei.png";
import { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
function Dummy() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5700) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);

  return (
    <>
      <div className="animate">
        <ScrollAnimation animateIn="fadeInUp">
          {/* <div className={`footerhead  ${show && "moveup"}`}> */}
          <div className="footerhead">
            <div className="footerwrap">
              <h4>Owner & Creator:</h4>
              <span style={{ fontWeight: "700", fontSize: "25px" }}>
                Hassan Ahmed Khan.
              </span>
              <h5>
                Copyright <span className="copyicon">©️</span> 2021 Hassan Ahmed
                Khan | All Rights Reserved.
              </h5>
            </div>
            <div className="socialicons">
              <a href="https://www.facebook.com/theycallmekhan/" alt="FB Icon">
                <img src={fb} className="icon" alt="img" />
              </a>
              <a
                href="https://www.instagram.com/hassanahmedkhann/"
                alt="Insta Icon"
              >
                <img src={insta} className="icon" alt="img" />
              </a>
              <a
                href="https://www.linkedin.com/in/hassan-ahmed-khan-937210202/"
                alt="LinkedIn Icon"
              >
                <img src={li} className="icon" alt="img" />
              </a>
              <a href="mailto:itshakhere@gmail.com" alt="Email Icon">
                <img src={em} className="icon" alt="img" />
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}

export default Dummy;
