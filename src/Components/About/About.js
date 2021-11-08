import { React, useState, useEffect } from "react";
import "./About.css";
import Info from "./Info";
import school from "../Images/school.jpg";
import college from "../Images/college.png";
import bukc from "../Images/bukc.png";
import resume from "../files/react.pdf";
import ds from "../files/ds.pdf";
import cv from "../files/cv.pdf";
import pdf from "../Images/pdf.png";
import mark from "../Images/mark.jpg";

function About() {
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);

  window.addEventListener("scroll", () => {});
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 850) {
        setshow2(true);
      } else {
        setshow2(false);
      }
    });
  }, []);
  return (
    <>
      <div id="aboutme" className=" container-fluid aboutheader mt-5">
        <div className="about-row row">
          <div className="lbox col-sm-3 col-12">
            <div style={{ padding: "10px" }} className="row">
              <div
                style={{ textAlign: "center", fontSize: "40px" }}
                className="col-12 animate-charcter"
              >
                About Me
              </div>

              <div className={`col-12 wrapper2  ${show && "slide"}`}>
                <div className="circle2"></div>
              </div>
            </div>
          </div>
          <div className={`rbox col-sm-9 col-12  ${show && "slide2"}`}>
            <h2 className="mt-2" style={{ fontWeight: "600" }}>
              Abstract
            </h2>
            <div className="twrap mt-3">
              <p className="desc">
                Creative, Inquisitive and Energetic Computer Science student
                with an ambition to gain experience, particularly in the domain
                of Software and Web Development. Skilled in coding with bedrock
                in math and logic. Familiar with different programming languages
                including C++, JavaScript, python, and java. Striving to gain
                real world experience and leverage skills in collaboration,
                communication, designing, and development as a{" "}
                <span style={{ fontWeight: "700" }}>
                  Software/Web Developer.
                </span>
              </p>
            </div>
            <div class="dropdown">
              <button class="dropbtn">
                <img className="icon" src={pdf} />
                Download Resume
              </button>
              <div class="dropdown-content">
                <a href={resume} target="_blank">
                  Front-End Development
                </a>
                <a href={ds} target="_blank">
                  Data Science/Analysis
                </a>
                <a href={cv} target="_blank">
                  CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1>Educational History</h1>
        </div>
        <div className="superinfo">
          <div className={`megainfo  ${show2 && "moveup"}`}>
            <div className="info">
              <Info
                key="1"
                title="University"
                study="Bachelors of Computer Science | Present*"
                company="Bahria University Karachi"
                imgsrc={bukc}
              />
            </div>
            <div className="info">
              <Info
                key="2"
                title="School"
                study="Matriculation | 2016"
                company="St. Peters High School"
                imgsrc={school}
              />
            </div>
            <div className="info">
              <Info
                key="3"
                title="College"
                study="Intermediate | 2018"
                company="Govt. Degree Boys College Gulistan-e-Jauhar"
                imgsrc={college}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Certificates /> */}
    </>
  );
}

export default About;
