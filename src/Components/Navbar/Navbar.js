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
      console.log("Here 1:", navitems.classList);
      //   togglebtn.classList.toggle(".bgc");
    } else if (!navitems.classList.contains("active") && active2 == false) {
      navitems.classList.toggle("active");
      togglebtn.classList.toggle("bgc");
      console.log("Here 2:", navitems.classList);
      console.log("Here Toggle", togglebtn);
    } else if (navitems.classList.contains("active2")) {
      navitems.classList.toggle("active2");
      navitems.classList.toggle("active");
      togglebtn.classList.toggle("bgc");

      active2 = false;
      console.log("Here 3:", navitems.classList);
      //   togglebtn.classList.toggle(".bgc");
    }
  }

  return (
    <>
      <nav className="thenavbar">
        <a style={{ textDecoration: "none", color: "black" }} href="#home">
          <div className="title">Portfolio</div>
        </a>
        <a onClick={handleclick} className="hamber">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navitems">
          <ul className="unlist">
            <li className="first">
              <a href="#home">Home</a>
            </li>
            <li>
              <a exact href="#aboutme" alt="">
                About Me
              </a>
            </li>
            <li>
              <a href="#cards" alt="">
                My Work
              </a>
            </li>
            <li>
              <a href="#certificates">Certifications</a>
            </li>
            <li className="last">
              <a href="#contactme" alt="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
