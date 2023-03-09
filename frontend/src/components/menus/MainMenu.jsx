import React from 'react';
import { Link } from "react-router-dom";
import './MainMenu.css';

const MainMenu = () => {
  return (
    <>

      <Link to="/"><b>Home</b></Link>
      <Link to="/control-panel"><b>Control Panel</b></Link>

    </>
  )
}

export default MainMenu;
