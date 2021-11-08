import React from "react";
import "../About/About.css";
import mark from "../Images/mark.jpg";
function Quotes() {
  return (
    <div>
      <div className="quotes">
        <img className="mark" src={mark} />
        <div className="quote">
          <div className="mover2">
            <p>
              The most damaging phrase in the language is "Its always been done
              this way".
            </p>
            <p className="nameof">- Grace Hopper</p>

            <p>
              There are two ways to write error-free programs, only the third
              one works.
            </p>
            <p className="nameof">-Lou Gerstner</p>
            <p>
              The one who said it can't be done should not disturb the one doing
              it.
            </p>
            <p className="nameof">-William Bentler</p>
            <p>No code has zero defects.</p>
            <p className="nameof">-Ashton Turner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
