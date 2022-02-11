import axios from "axios";

const KEY = "AIzaSyBNmr157i3FsAYbKX2Kom_X_W1Y8rRosV0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
