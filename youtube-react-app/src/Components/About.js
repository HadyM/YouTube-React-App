import React, { Component } from "react";
import Jamee from "../Assets/jamee.jpg";
import Hady from "../Assets/hady.jpeg";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="title">
          <h1>About Project:</h1>
          <br />
          <h4>
            React app that lets you search for YouTube videos using the YouTube
            API. Created using React Router Dom, Axios, Youtube API, and
            React-YouTube npm dependency. Styled using CSS3.
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
            I am Full Stack Web Developing Engineer currently studying at
            Pursuit, an intensive 12 - month software engineering fellowship
            with a 9% acceptance rate! I always loved technology and I worked
            for Unisys as a Dell Technician where my job consisted mostly of
            computer hardware repair, computer diagnostics, and computer
            maintenance. When the opportunity to join Pursuit became available I
            didn't hesitate to join, I wanted to learn the software side of
            things and I am so excited that I finally am!! I am excited that in
            this coming year I will be learning programming languages such as
            CSS, JavaScript, Html, SQL, Node.js, Express, React, and Redux.
            <br />
            <br />I am bilingual, I speak both Arabic and English fluently. I am
            also a big gamer and I like to play mostly mmorpg type games, but I
            will try any game at least once and then see if I like it, then I'll
            play it again and if not at least I learned from that experience. I
            am extremely creative and love to draw and paint. I am honest, hard
            working, and passionate about everything I do. If I try to do
            something then I always give it a hundred and ten percent or then I
            feel there wouldn't even be a point in trying, so I always give my
            all.
          </h4>
          <a target="_blank" href="https://github.com/HadyM">
            Link to GitHub
          </a>
        </div>
        <div className="info">
          <h3>Jamee Hengari</h3>
          <img
            src={Jamee}
            alt="headshot"
            style={{ width: "500px", height: "500px" }}
          />
          <h4>
            Making the decision to pursue a career in software development was
            an easy one. I am a fellow at Pursuit, an intensive 12-month
            software engineering fellowship with a 9% acceptance rate. Joining
            this fellowship has been a highlight- as I am excited to be part of
            the next generation of tech!
            <br />
            <br />
            I have a passion for music, and in particular, audio mixing. I'm
            familiar with Logic Pro X, Reason, and FL Studio. My background in
            audio has provided me with an appreciation for attention to fine
            detail, which I aim to incorporate into my software development. I
            love soccer in any way, shape, or form. I also enjoy fitness, combat
            training, and yoga.
            <br />
            <br />
            As a team player, I believe that we are are only as strong as our
            weakest link and I value an environment in which people are always
            trying to improve themselves or those around them. I am interested
            in a career path that values progress, and moving towards a more
            just, greener, and better world.
          </h4>
          <a target="_blank" href="https://github.com/jamee-maker">
            Link to GitHub
          </a>
        </div>
      </div>
    );
  }
}
