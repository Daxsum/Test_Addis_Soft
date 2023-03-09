import React from "react";
import "./Song.css";
import { SongCard } from "..";
import { useSelector } from "react-redux";

const SongList = () => {
  const songs = useSelector((state) => state.songList);

  return (
    <>
      {songs.length > 0 ? (
        songs.map((song) => {
          return <SongCard song={song} key={song._id} />;
        })
      ) : (
        <div className="row" key="0">
          <h5>Not found song.</h5>
        </div>
      )}
    </>
  );
};

export default SongList;
