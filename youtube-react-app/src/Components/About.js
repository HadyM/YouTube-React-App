import React, { Component } from "react";
import Jamee from "../Assets/jamee.jpg";
import Hady from "../Assets/hady.jpeg";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="title">
          <h1>About project</h1>
          <br />
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            consequatur optio, maxime enim, esse corporis earum autem dolorum
            numquam unde, placeat sit vel officia fugiat saepe est voluptas.
            Molestiae, temporibus.
          </h4>
        </div>
        <br />
        <div className="info">
          <h3>Hady Mohamed</h3>
          <img
            src={Hady}
            alt="headshot"
            style={{ width: "500px", height: "500px" }}
          />
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            accusantium animi ab eius voluptatibus ullam qui quae explicabo
            saepe iure, molestias voluptatum recusandae aperiam optio. Doloribus
            a fuga voluptates quos!
          </h4>
        </div>
        <div className="info">
          <h3>Jamee Hengari</h3>
          <img
            src={Jamee}
            alt="headshot"
            style={{ width: "500px", height: "500px" }}
          />
          <h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed unde
            fugiat labore repudiandae quis enim praesentium nobis. Repellat rem
            nesciunt totam laudantium sint in, corporis nihil eum nostrum,
            distinctio omnis!
          </h4>
        </div>
      </div>
    );
  }
}

// Just Added to keep the page rendering we can change this at anytime.
