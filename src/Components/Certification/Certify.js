import React from "react";
import "./Certify.css";
function Certify(props) {
  return (
    <>
      <div className="imagediv">
        <img className="theimage" src={props.imgsrc} alt="img" />
        <div className="textwrapper">
          <h3 style={{ fontWeight: "550" }}>{props.title}</h3>
          <h4>{props.company}</h4>
          <a href={props.link} target="_blank" rel="noreferrer">
            <button className="btn btn-secondary movebtn mb-3">
              Lets See.
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Certify;
