import React from "react";
import "./Info.css";

function Info(props) {
  return (
    <div className="imagediv">
      <img className="theimage" src={props.imgsrc} alt="img" />
      <div className="textwrapper">
        <h1 style={{ fontWeight: "550" }}>{props.title}</h1>
        <h5 style={{ fontWeight: "700" }}>{props.company}</h5>

        <h4 style={{ fontSize: "20px" }}>{props.study}</h4>
      </div>
    </div>
  );
}

export default Info;
