import React from "react";
import Certify from "./Certify";
import "./Certificate.css";
import { details } from "./details";
import { useState, useEffect } from "react";
function Certificates() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 4350) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);
  return (
    <>
      <div id="certificates" className="megacertify">
        <div className="text-header my-3">
          <h1>Some Certifications.</h1>
        </div>
        <div className="certify">
          {details.map((item, i) => (
            <>
              <div key={i} className={`eachcertify ${show && "moveup"}`}>
                <Certify
                  key={i}
                  title={item.title}
                  company={item.company}
                  imgsrc={item.imgsrc}
                  link={item.link}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Certificates;
