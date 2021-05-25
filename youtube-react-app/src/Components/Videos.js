import React, { Component } from "react";
import YouTube from "react-youtube";

export class Videos extends Component {
  render() {
    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="YouTube">
        <YouTube
          className="YouTubeSnippet"
          videoId={this.props.match.params.id}
          opts={opts}
        />
      </div>
    );
  }
}

export default Videos;
