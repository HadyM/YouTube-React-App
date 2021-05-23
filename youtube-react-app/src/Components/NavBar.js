import React from "react";
import { Link } from "react-router-dom";
import YouTube from "../Assets/youtube-logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Links">
        <img
          src={YouTube}
          alt="youtube-logo"
          style={{ width: "140px", height: "60px" }}
        />{" "}
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default NavBar;
