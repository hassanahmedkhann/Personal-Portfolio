import React from "react";
import "./Certify.css";
function Certify(props) {
  return (
    <>
      <div className="imagediv">
        <img className="theimage" src={props.imgsrc} />
        <div className="textwrapper">
          <h1>{props.title}</h1>
          <h4>{props.company}</h4>
          <a href={props.link} target="_blank">
            <button className="btn btn-secondary movebtn my-3">
              Lets See.
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Certify;
