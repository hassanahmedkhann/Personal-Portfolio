import { React, useState, useEffect } from "react";
import Card from "./Card";
import { Data } from "./cardData";
import "./Cards.css";

function Cards() {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2100) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);
  return (
    <>
      <div id="cards" className="container-fluid main-container">
        <div className="cardtext">
          <h1 style={{ fontSize: "35px" }}>Some of the Projects I've made.</h1>
        </div>
        <div className={` holder ${show && "moveup"}`}>
          {Data.map((items, i) => (
            <>
              <div className="eachcard">
                <Card
                  key={items.id}
                  title={items.title}
                  imgsrc={items.imgsrc}
                  desc={items.desc}
                  link={items.link}
                />
              </div>
            </>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default Cards;

/* <Card  />; */
