import React from "react";
import { SEARCH_SONG, SEARCHING_SONG } from "../../redux/Song/song.reducer";
import { useDispatch, useSelector } from "react-redux";

const SearchSong = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songList);

  const handleChange = (event) => {
    const { value } = event.target;
    if (value !== undefined) {
      const filteredSongs = songs.filter(
        (song) => song.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
      dispatch(SEARCH_SONG(filteredSongs));
      dispatch(SEARCHING_SONG(true));
    } else {
      dispatch(SEARCH_SONG(songs));
      dispatch(SEARCHING_SONG(false));
    }
  };

  return (
    <input
      className="u-full-width search"
      type="text"
      name="search"
      placeholder="Search song"
      onChange={handleChange}
    />
  );
};

export default SearchSong;
