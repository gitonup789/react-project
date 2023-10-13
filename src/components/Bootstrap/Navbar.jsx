import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>

      <Link to="/">Home</Link>
      <br></br>
      <Link to="/hip-hop">HipHop</Link>
      <br />
      <Link to="/afrobeats">AfroBeats</Link>
      <br />
      <Link to="/pop">Pop</Link>
      <br />
      <Link to="/rock">Rock</Link>

      </div>
    </div>
  );
};

export default Navbar;
