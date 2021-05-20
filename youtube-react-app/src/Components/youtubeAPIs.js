import axios from "axios";

// YouTube URL search video list Api
// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=any&type=video&key=[YOUR_API_KEY]'

const apiKey = process.env.REACT_APP_API_KEY;

const searchResults = async (props) => {
  const { data } = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props}&type=video&key=${apiKey}`,
  );
  return data.items;
};
// change "props" to another label when creating value to be passed down from search
const youTubeAPI = {
  searchResults,
};

export default youTubeAPI;
