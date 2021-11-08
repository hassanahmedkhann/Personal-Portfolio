import React from "react";
import "./Info.css";

function Info(props) {
  return (
    <div className="imagediv">
      <img className="theimage" src={props.imgsrc} />
      <div className="textwrapper">
        <h1 style={{ fontWeight: "550" }}>{props.title}</h1>
        <h4 style={{ fontWeight: "700" }}>{props.company}</h4>

        <h4 style={{ fontSize: "30px" }}>{props.study}</h4>
      </div>
    </div>
  );
}

export default Info;
