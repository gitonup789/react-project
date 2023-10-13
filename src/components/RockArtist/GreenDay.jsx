import React, { useState, useContext } from "react";
import Dookie from "../Album-Covers/Rock-Albums/Dookie.jpg";

const GreenDay = () => {

  return (
    <div>
      <h1>Green Day</h1>
      <p>Summary</p>
      <p>
        With the release of their major-label debut, Dookie, Green Day quickly
        became one of the leading punk/alternative bands of the '90s, winning a
        GRAMMY Award® for Best Alternative Music Performance in 1994 and selling
        millions of albums internationally. Formed in northern California in the
        late '80s, Green Day's music combines '70s-style punk with catchy lyrics
        and pop. The group consists of singer/guitar player Billie Joe
        Armstrong, bassist Mike Dirnt and drummer Tre Cool. Other Green Day
        albums include 1995's Insomniac, 1997's Nimrod, 2000's Warning and the
        critically acclaimed American Idiot in 2004.
      </p>
      <p>Dookie</p>

      <p>Album: </p>
      <p>Year: </p>
      <img src={Dookie} alt="" />
      <p></p>
    </div>
  );
};

export default GreenDay;
