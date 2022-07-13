import React from "react";
import "./header.css";
import fractifyLogo from "../assets/fractifylogo.svg";
const Header = () => {
  return (
    <div className="head-cont">
      {/* <div className="head-logo"> */}
      <img src={fractifyLogo} />
      {/* </div> */}
      <div className="options-row">
        <p className="option-font">Products</p>
        <p className="option-font">Invest</p>
        <p className="option-font">Community</p>
        <p className="option-font">About</p>
      </div>
      <button className="head-btn">Early Access</button>
    </div>
  );
};

export default Header;
