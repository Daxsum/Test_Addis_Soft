import React from "react";
import { useSelector } from "react-redux";
import { AddSong, SongsTable, UpdateSong } from "../../components";

const ControlPanel = () => {
  const editing = useSelector((state) => state.editing);
  return (
    <div className="row">
      <div className="five columns">
        {editing ? <UpdateSong /> : <AddSong />}
      </div>
      <div className="seven columns">
        <SongsTable />
      </div>
    </div>
  );
};

export default ControlPanel;
