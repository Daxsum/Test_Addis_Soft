import React from "react";
import "./Song.css";
import { SongCard } from "..";
import { useSelector } from "react-redux";

const SongListFiltered = () => {
  const songs = useSelector((state) => state.filteredSongList);

  return (
    <>
      {songs.map((song) => {
        return <SongCard song={song} key={song._id} />;
      })}
    </>
  );
};

export default SongListFiltered;
