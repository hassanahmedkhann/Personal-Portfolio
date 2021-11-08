import "./Header.css";
import React from "react";

function Header() {
  return (
    <>
      <div id="home" className="container-fluid themainc">
        <div className="row headdd">
          <div className=" thel col-md-6">
            <div className="left-text">
              <h2>Hey! Welcome.</h2>
              <h2>My name is</h2>
              <h1 style={{ fontWeight: "bold" }}>Hassan Ahmed Khan</h1>
              <div className="title-wrapper">
                <div className="mover">
                  <div className="item ">
                    <h4>Computer Science Student.</h4>
                  </div>
                  <div className="item ">
                    <h4>Front-End Developer.</h4>
                  </div>
                  <div className="item ">
                    <h4>Google Certified Data Analyst.</h4>
                  </div>
                  <div className="item ">
                    <h4>Software Engineer.</h4>
                  </div>
                </div>
              </div>
              <div className="mobtn">
                <div>
                  <a href="#cards">
                    <button className="btn btn-secondary movebtn">
                      Lets See My Work.
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ther col-md-6">
            <div className="wrapper-shape">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
