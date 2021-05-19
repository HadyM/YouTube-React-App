import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Links">
        <img
          src="http://4.bp.blogspot.com/-JlQpNpKME14/U6O-UYvyyTI/AAAAAAAABGk/6gEGuKC1PMg/s1600/Computers_Social_networks_Youtube_034655_.jpg"
          alt="youtube-logo"
          style={{ width: "130px", height: "60px " }}
        />{" "}
        <Link to="/home">Home</Link>{" "}
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default NavBar;
