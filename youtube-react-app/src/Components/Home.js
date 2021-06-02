import React, { Component } from "react";
import youTubeAPI from "./youtubeAPIs.js";
import { Link } from "react-router-dom";
import "./Home.css";

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
            {/* it doesn't look like the li element is doing anything additional to your code here.
              If you would like to use the li element, it is best practice to include a parent element 
              to wrap it (ie: <ol>, <ul>), which you can include on line 93 to replace the div element. */}
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.description}
              style={{ width: "200px", height: "200px" }}
            />
            <h4 className="title">{video.snippet.title}</h4>
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
            className="input"
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>
        <div className={error ? "errorClass" : null}>
        
        {/* in the future when using ternary, if one of your conditionals are null it is likely a sign that
          you should use a different approach. In this instance you can use 'Inline If with Logical && Operator'
          https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator 
          ie:
          {error && 
            <div className='errorClass'>"No Search Results Yet!, Please submit a search above!</div>
          }
        */}
          {error
            ? "No Search Results Yet!, Please submit a search above!"
            : null}
        </div>

        <div className="video">{videoListItems}</div>
      </div>
    );
  }
}
