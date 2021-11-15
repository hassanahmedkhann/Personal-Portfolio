import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <div className="">
        <div className="cardholder">
          <div className="imageholder">
            <img src={props.imgsrc} alt="img" className="theimg"></img>
          </div>
          <div className="textholder">
            <h2>{props.title}</h2>
            <h6 className="my-2">{props.desc}</h6>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button className="btn btn-secondary movebtn my-3">
                Lets See.
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
