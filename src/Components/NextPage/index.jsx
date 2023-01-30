import React from "react";
import "./NextPage.css";
import Navbar from "../Navbar";
import leviclancy2 from "../../leviclancy2.svg";
import Arrow3 from "../../Arrow3.svg";
import Frame1 from "../../Frame1.svg";
import { Link } from "react-router-dom";

function NextPage() {
  return (
    <div>
      <div className="overAllContainer">
        <Navbar />
        
        <div className="icons">
          <Link to="/"> 
          <div><img src={Arrow3} alt="" /></div>
          </Link>
          <div><img src={Frame1} alt="" /></div>
        </div>
        
        <div className="contentDiv">
          <div className="leftContent">
            <div className="imgDiv">
              <img src={leviclancy2} alt="" />
              
            </div>
          </div>
          <div className="rightContent">
            <div className="writeUp">
              <h2>Plastic Hears Sculpture</h2>
              <p>
                Browse a curated selection of art around the world, including
                museum exhibitions, gallery openings, upcoming and many more.
                Browse a curated selection of art around the world, including
                museum exhibitions, gallery openings, upcoming and many
                moreBrowse a curated selection of art around the world,
                including museum exhibitions, gallery openings, upcoming and
                many more
              </p>
            </div>
            <div className="buttons">
              <div className="leftButton">
                <div className="div1"></div>
                <div className="div2">
                  <h1>Explore arts</h1>
                </div>
              </div>
              <div className="rightButton">
                <h1>Explore arts</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextPage;
