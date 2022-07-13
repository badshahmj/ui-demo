import React from "react";
import "./content.css";
import person from "../assets/person.svg";
import playButton from "../assets/playbutton.svg";
import aero from "../assets/aero.svg";
const Content = () => {
  return (
    <div className="main-cont">
      <div className="main-cont-1">
        <div className="prod-div">
          <div className="unlock-divs">
            <div className="unlock-div">
              <p className="unlock-font">Unlock</p>
              <p className="your-font">your</p>
            </div>
            <div className="unlock-div">
              <p className="unlock-font">online growth</p>
            </div>
            <div className="unlock-div">
              <p className="unlock-font">Potential</p>
              <div className="yes-div">
                <p
                  className="your-font"
                  style={{
                    background: "#2C5F52",
                    color: "white",
                    margin: 0,
                    border: 0,
                  }}
                >
                  Yes
                </p>
              </div>
            </div>
          </div>
          <div className="play-div">
            <div className="prod-cont">
              <p className="prod-font">Our Product</p>
            </div>
            <img src={playButton} style={{ margin: "0 0 0 20px" }} />
          </div>
        </div>

        <div className="img-div">
          <img className="img-style" src={person} />
        </div>
      </div>
      <div className="main-cont-2">
        <img src={aero} />
        <div>
          <p className="info-font-1">
            Drive your money to work smarter than others
          </p>
        </div>
        <div>
          <p className="info-font-2">
            A safe and secure invesment nedd guided aproach with real time
            analytics and risk analysis , we can help you to catch all at once.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
