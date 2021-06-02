import axios from "axios";

// in the future you should keep files like this one in a seperate folder since it is technically not a component
// you can include this in some sort of config folder instead

// YouTube URL search video list Api
// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=any&type=video&key=[YOUR_API_KEY]'

const apiKey = process.env.REACT_APP_API_KEY;

const searchResults = async (searchInput) => {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchInput}&type=video&key=${apiKey}`
  );
  return data.items;
};

const youTubeAPI = {
  searchResults,
};

export default youTubeAPI;
