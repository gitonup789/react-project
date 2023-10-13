import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MusicData } from "../App";

const ApiCall = () => {
  const [listOfAlbums, setListOfAlbums] = useState([]);
  const query = 'Queens of the Stone Age'

  fetch(`https://musicbrainz.org/ws/2/artist/?query=${query}`, {
      headers: {
          'Accept': 'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
      // search results
      console.log(data.artists);
  
      // get id of first search result
      const artistId = data.artists[0].id
      
      fetch(`https://musicbrainz.org/ws/2/artist/${artistId}?inc=releases`, {
          headers: {
              'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .then(artistData => {
          // details for all artist releases
          console.log(artistData.releases);
        })
    })

  useEffect(() => {
    musicData();
  }, []);
  return (
    <div>
      <h1>Api Call</h1>
      <div>
        {listOfAlbums.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiCall;
