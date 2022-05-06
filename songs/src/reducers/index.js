import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "楓", duration: "4:05" },
    { title: "王妃", duration: "3:45" },
    { title: "人質", duration: "3:55" },
    { title: "一路向北", duration: "3:20" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
