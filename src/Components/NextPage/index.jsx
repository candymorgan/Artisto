import React from "react";
import "./NextPage.css";
import Navbar from "../Navbar";
import Arrow3 from "../../Arrow3.svg";
import Frame1 from "../../Frame1.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Display } from "../Context";



function NextPage() {
  const {singleImage, description} = useContext(Display)
  return (
    <>

      <div className="overAllContainer">
        <Navbar />
        
        <div className="icons">
          <Link to="/"> 
          <div className="arrow"><img src={Arrow3} alt="" /></div>
          </Link>
          <div><img src={Frame1} alt="" /></div>
        </div>
        
        <div className="contentDiv">
          <div className="leftContent">
            <div className="imgDiv">
              <img src={singleImage} alt="" />
              
            </div>
          </div>
          <div className="rightContent">
            <div className="writeUp">
              <h2>{description.title}</h2>
              <p>{description.provenance_text}</p>
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
    </>
  );
}

export default NextPage;
