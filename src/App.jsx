import { useState, useContext, createContext, useEffect } from "react";
import "./App.css";
import HipHop from "./components/HipHop";
import Jcole from "./components/RapArtist/Jcole";
import Pop from "./components/Pop";
import Rock from "./components/Rock";
import GreenDay from "./components/RockArtist/GreenDay";
import AfroBeats from "./components/AfroBeats";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Bootstrap/Navbar";
import Home from "./components/Home";

export const MusicData = createContext();
function App() {

  const [musicinfo, setMusicInfo] = useState([])
  // const [albumInfo, setAlbumInfo] =useState()

  const albumInfo = async () => {
    
    const url = 'https://genius-song-lyrics1.p.rapidapi.com/artist/albums/?id=69&per_page=20&page=1';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f4a9d0472cmsh269df730bbf4f38p1efc94jsn9c297b058b23',
        'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
    
  }

useEffect(() => {
  albumInfo(
    []
  )
  setMusicInfo()
}, []);



return (
  <>
      <div>
        <Navbar />
        <MusicData.Provider value = {[musicinfo, setMusicInfo]}>
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hip-hop" element={<HipHop />} />
          <Route path="/pop" element={<Pop />} />
          <Route path="/rock" element={<Rock />} />
          <Route path="/afrobeats" element={<AfroBeats />} />
          <Route path="/jcole" element={<Jcole />} />
          <Route path="/greenday" element={<GreenDay />} />
        </Routes>
        </MusicData.Provider>
      </div>
    </>
  );
};
  
  export default App;
