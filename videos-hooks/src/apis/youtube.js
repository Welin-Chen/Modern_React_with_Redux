import axios from "axios";

const KEY = "AIzaSyBLWfP44EPFYEYEQt-quOqMgbW2NArW8W4";
// const KEY = "AIzaSyCsRa7T8jyru140B5msw-XY6g4z_2INcVs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video", //channel, playlist or video
  },
});
