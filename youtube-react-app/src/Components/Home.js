import React, { Component } from "react";
import youTubeAPI from "./youtubeAPIs.js";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      videos: [],
      error: true,
    };
  }

  getVideos = async () => {
    const { searchInput } = this.state;
    const videos = await youTubeAPI.searchResults(searchInput);
    this.setState({ videos, searchInput: "" });
  };

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      this.getVideos();
      this.setState({
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        searchInput: "",
        videos: [],
      });
      console.log(error);
    }
  };

  render() {
    const { searchInput, videos, error } = this.state;
    const videoListItems = videos.map((video) => {
      return (
        <Link key={video.id.videoId} to={`/videos/${video.id.videoId}`}>
          <li>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.description}
              style={{ width: "200px", height: "200px" }}
            />
            <h4>{video.snippet.title}</h4>
          </li>
        </Link>
      );
    });
    return (
      <div className="home">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Search for a video"
            value={searchInput}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          {error
            ? "No Search Results Yet!, Please submit a search above!"
            : null}
        </div>

        <div>{videoListItems}</div>
      </div>
    );
  }
}
