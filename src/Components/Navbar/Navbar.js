import { React } from "react";
import "./Navbar.css";

function Navbar() {
  let togglebtn, navitems;
  let active2 = false;

  function handleclick() {
    togglebtn = document.querySelector(".thenavbar");
    navitems = document.querySelector(".unlist");

    if (navitems.classList.contains("active")) {
      navitems.classList.toggle("active");
      navitems.classList.toggle("active2");
      togglebtn.classList.toggle("bgc");

      active2 = true;
      //   togglebtn.classList.toggle(".bgc");
    } else if (!navitems.classList.contains("active") && active2 === false) {
      navitems.classList.toggle("active");
      togglebtn.classList.toggle("bgc");
    } else if (navitems.classList.contains("active2")) {
      navitems.classList.toggle("active2");
      navitems.classList.toggle("active");
      togglebtn.classList.toggle("bgc");

      active2 = false;
      //   togglebtn.classList.toggle(".bgc");
    }
  }

  return (
    <>
      <nav className="thenavbar">
        <a style={{ textDecoration: "none", color: "black" }} href="#home">
          <div className="title animate-charcter">
            {/* <img className="logo" src={logo} alt="logo"></img> */}
            HAK
          </div>
        </a>
        <span onClick={handleclick} className="hamber">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
        <div className="navitems">
          <ul className="unlist">
            <a href="#home">
              <li className="first">Home</li>
            </a>
            <a href="#aboutme" alt="">
              <li>About Me</li>
            </a>
            <a href="#cards" alt="">
              <li>My Work</li>
            </a>
            <a href="#certificates">
              <li> Certifications</li>
            </a>
            <a href="#contactme" alt="">
              <li className="last">Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
