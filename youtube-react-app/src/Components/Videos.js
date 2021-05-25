import React, { Component } from "react";
import YouTube from "react-youtube";

export class Videos extends Component {
  render() {
    const opts = {
      height: "490",
      width: "740",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="YouTube">
        <YouTube videoId={this.props.match.params.id} opts={opts} />
      </div>
    );
  }
}

export default Videos;
