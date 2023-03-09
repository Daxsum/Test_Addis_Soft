import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./songs.css";
import {
  DELETE_SONG,
  EDITING_SONG,
  GET_SONG,
  SELECT_SONG,
} from "../../redux/Song/song.reducer";

const SongsTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_SONG());
  }, [SongsTable]);
  const songs = useSelector((state) => state.songList);
  console.log("songs", songs);
  const editSong = (song) => {
    dispatch(EDITING_SONG(true));
    dispatch(SELECT_SONG(song));
  };

  return (
    <div>
      <h5>Song List</h5>
      <table className="u-full-width song-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {songs.length > 0 ? (
            songs.map((song) => {
              const { _id, title, artist, album, genre } = song;
              return (
                <tr key={_id}>
                  <td>{title}</td>
                  <td>{artist}</td>
                  <td>{album}</td>
                  <td>{genre}</td>
                  <td>
                    <button
                      className="action-btn"
                      onClick={() => editSong(song)}
                    >
                      UPDATE
                    </button>
                    <button
                      className="action-btn"
                      onClick={() => dispatch(DELETE_SONG(song))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No songs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongsTable;
