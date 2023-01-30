import React from "react";
import "./Discover.css";
import Star3 from "../../Star3.svg";
import leviclancy2 from "../../leviclancy2.svg";
import Frame12 from "../../Frame12.svg";

function Discover() {
  return (
    <>
      <div className="mainContainer">
        <div className="gridItems">
          <div className="writeUp">
            <div>
              <h1 className="amazing">
                Discover amazing art around the <span>world</span>
              </h1>
            </div>
            <div>
              <p>
                Browse a curated selection of art around the world, including
                museum exhibitions, gallery openings, upcoming and many more
              </p>
            </div>
            <div className="explore">
              <div className="yellowContainer2"></div>
              <div className="whiteContainer2">
                <h3>Explore arts</h3>
              </div>
            </div>

            <div className="starDiv">
              <img src={Star3} alt="" />
            </div>
          </div>

          <div className="image">
            
            <div className="wrapper">
              <div className="yellowDiv"></div>
              <div className="imageDiv">
                <img src={leviclancy2} alt="" />
              </div>
              <div className="frame">
              <img src={Frame12} alt="" />
            </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Discover;
