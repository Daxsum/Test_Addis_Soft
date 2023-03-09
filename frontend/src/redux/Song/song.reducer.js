import { createSlice } from "@reduxjs/toolkit";
// import apicall from "../../data/songData";
// let id = 0;
const slice = createSlice({
  name: "SONG",
  initialState: {
    songList: [],
    updating: false,
    selectedSong: {},
    searching: false,
    filteredSongList: [],
  },
  reducers: {
    GET_SONG: (state, action) => {
      state.songList = action.payload ? action.payload : state.songList;
    },
    ADD_SONG: (state, action) => {
      state.songList.push(action.payload);
    },
    DELETE_SONG: (state, action) => {
      state.songList.filter((song) => song._id !== action.payload._id);
    },
    EDITING_SONG: (state, action) => {
      state.editing = action.payload;
    },
    SELECT_SONG: (state, action) => {
      state.selectedSong = action.payload;
    },
    UPDATE_SONG: (state, action) => {
      const index = state.songList.findIndex(
        (song) => song.id === action.payload[1]
      );
      state.songList[index] = action.payload[0];
    },
    SEARCH_SONG: (state, action) => {
      state.filteredSongList = [action.payload];
    },
    SEARCHING_SONG: (state, action) => {
      state.searching = action.payload;
    },
  },
});

console.log(slice);
export const {
  GET_SONG,
  ADD_SONG,
  DELETE_SONG,
  EDITING_SONG,
  SELECT_SONG,
  UPDATE_SONG,
  SEARCH_SONG,
  SEARCHING_SONG,
} = slice.actions;
export default slice.reducer;
