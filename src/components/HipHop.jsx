import React from "react";
import { Link, Routes, Route } from "react-router-dom";

const HipHop = () => {
  return (
    <div className="hiphop">
      <h1 className="titles">Hip-Hop</h1>
      <h2>Artists</h2>
      <ul>
        <li>Biggie Smalls</li>
        <li>Kendrick Lamar</li>
        <li>Kanye West</li>
        <li><Link to="/jcole">JCole</Link></li>
      </ul>

    </div>
  );
};

export default HipHop;
