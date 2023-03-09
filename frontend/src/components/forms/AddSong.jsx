import React, { useState } from "react";
import serialize from "form-serialize";
import "./AddSong.css";
import { ADD_SONG } from "../../redux/Song/song.reducer";
import { useDispatch } from "react-redux";
import { Box, Button } from "rebass";
import { Label, Input } from "@rebass/forms";
const AddSong = () => {
  const [photo, setPhoto] = useState();
  const dispatch = useDispatch();

  function handleFormSubmit(event) {
    event.preventDefault();
    const newSong = serialize(event.target, { hash: true });
    console.log(newSong);
    var formdata = new FormData();
    formdata.append("title", newSong.title);
    formdata.append("artist", newSong.artist);
    formdata.append("album", newSong.album);
    formdata.append("genre", newSong.genre);
    formdata.append("file", photo);
    dispatch(ADD_SONG(formdata));
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h5>Add Song</h5>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" type="text" />
        </Box>
      </div>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="artist">Artist</Label>
          <Input id="artist" name="artist" type="text" />
        </Box>
      </div>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="album">Album</Label>
          <Input id="album" name="album" type="text" />
        </Box>
      </div>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="genre">Genre</Label>
          <Input id="genre" name="genre" type="text" />
        </Box>
      </div>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="genre">Photo</Label>
          <Input
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
            type="file"
            id="photo"
            name="photo"
          />
        </Box>
      </div>

      <div className="col">
        <button className="button-primary add-btn" type="submit">
          ADD SONG
        </button>
      </div>
    </form>
  );
};

export default AddSong;
