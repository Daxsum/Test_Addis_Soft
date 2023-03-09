import React from "react";
import { useSelector } from "react-redux";
import "./SongDetail.css";

const SongDetail = (props) => {
  const songId = props.match.params._id;
  const songs = useSelector((state) => state.songList);
  const song = songs.filter((song) => song._id === songId);

  return (
    <>
      <div className="five columns image-side">
        <div className="detail-song-card">
          <div className="detail-image">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${song.filePath}`}
              alt={song.title}
            />
          </div>
          <div className="detail-song-rating">
            <p>{song.artist}</p>
          </div>
        </div>
      </div>
      <div className="seven columns content-side">
        <h5 className="detail-song-name">{song.title}</h5>
        <p className="detail-song-desc">{song.album}</p>
      </div>
    </>
  );
};

export default SongDetail;
