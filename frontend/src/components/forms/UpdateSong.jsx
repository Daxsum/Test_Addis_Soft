import React, { useState } from "react";
import "./AddSong.css";
import { EDITING_SONG, UPDATE_SONG } from "../../redux/Song/song.reducer";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "rebass";
import { Label, Input } from "@rebass/forms";
let selectedSong;
const UpdateSong = () => {
  const [photo, setPhoto] = useState();
  const dispatch = useDispatch();
  selectedSong = useSelector((state) => state.selectedSong);

  const handleChange = (e) => {
    const { name, value } = e.target;
    selectedSong = { ...selectedSong, [name]: value };
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const clickedBtnName = event.nativeEvent.submitter.name;
    if (clickedBtnName === "cancel") {
      dispatch(EDITING_SONG(false));
    } else {
      var formdata = new FormData();
      formdata.append("title", selectedSong.title);
      formdata.append("artist", selectedSong.artist);
      formdata.append("album", selectedSong.album);
      formdata.append("genre", selectedSong.genre);
      formdata.append("file", photo);
      const action = [formdata, selectedSong._id];

      console.log("selceted", action);
      // console.log(formdata);
      dispatch(UPDATE_SONG(action));

      dispatch(EDITING_SONG(false));
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h5>Update Song</h5>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            defaultValue={selectedSong.title}
            onChange={handleChange}
          />
        </Box>
      </div>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="title">Artist</Label>
          <Input
            id="artist"
            name="artist"
            type="text"
            defaultValue={selectedSong.artist}
            onChange={handleChange}
          />
        </Box>
      </div>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="title">Album</Label>
          <Input
            id="album"
            name="album"
            type="text"
            defaultValue={selectedSong.album}
            onChange={handleChange}
          />
        </Box>
      </div>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="title">Genre</Label>
          <Input
            id="genre"
            name="genre"
            type="text"
            defaultValue={selectedSong.genre}
            onChange={handleChange}
          />
        </Box>
      </div>
      <div className="row">
        <Box width={2 / 2} px={2}>
          <Label htmlFor="title">Photo</Label>
          <Input
            id="photo"
            name="photo"
            type="file"
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
          />
        </Box>
      </div>
      <div className="row">
        <div className="three columns">
          <p></p>
        </div>
        <div className="col">
          <button
            className="button-secondary add-btn"
            name="cancel"
            type="submit"
          >
            CANCEL
          </button>

          <Button className="button-primary add-btn" type="submit">
            SAVE
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UpdateSong;
