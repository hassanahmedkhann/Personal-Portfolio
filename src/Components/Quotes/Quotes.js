import React from "react";
import "../About/About.css";
import mark from "../Images/mark.jpg";
function Quotes() {
  return (
    <div>
      <div className="quotes">
        <img className="mark" src={mark} alt="img" />
        <div className="quote">
          <div className="mover2">
            <div className="p">
              The most damaging phrase in the language is "Its always been done
              this way".
              <span className="nameof">- Grace Hopper</span>
            </div>

            <div className="p">
              There are two ways to write error-free programs, only the third
              one works.
              <span className="nameof">-Lou Gerstner</span>
            </div>
            <div className="p">
              The one who said it can't be done should not disturb the one doing
              it.
              <span className="nameof">-William Bentler</span>
            </div>
            <div className="p">
              No code has zero defects.
              <span className="nameof">-Ashton Turner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
