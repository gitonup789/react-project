import React, { useContext, createContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";


const Rock = () => {


  return (
    <div>
      <h1>Rock</h1>
      <h2>Artist</h2>
      <ul>

      <li>Nirvana</li>
      <li><Link to="/greenday">Green Day</Link></li>
      <li>Artic Monkeys</li>
      <li>Red Hot Chili Peppers</li>

      </ul>
    </div>
  );
};

export default Rock;
