import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { fakePlaylists } from "./utils/fakeData";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState({});
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState({});
  const [type, setType] = useState("");

  useEffect(() => {
    axios
      .get("/api/playlists")
      .then((res) => res.data)
      .then((playlists) => setPlaylists(playlists.items));
    axios
      .get("/api/artists")
      .then((res) => res.data)
      .then((artists) => setArtists(artists.items));
    axios
      .get("/api/albums")
      .then((res) => res.data)
      .then((albums) => setAlbums(albums.items));
  }, []);

  const handlePlaylistSelect = (pl) => {
    setSelectedPlaylist(pl);
    setType("Playlist");
  };

  const handleArtistSelect = (artist) => {
    setSelectedArtist(artist);
    setType("Artist");
  };
  return (
    <div>
      <Navbar />
      <div className="container is-fluid columns">
        <Sidebar
          playlists={playlists}
          artists={artists}
          handlePlaylistSelect={handlePlaylistSelect}
          handleArtistSelect={handleArtistSelect}
        />
        <Content
          playlist={selectedPlaylist}
          artist={selectedArtist}
          type={type}
        />
        <Routes>
          <Route
            path="/:urlId"
            element={
              <Grid albums={albums} playlists={playlists} artists={artists} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;
