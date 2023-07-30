import React, { useState } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import Playlist from './Playlist';
import Spotify from './Spotify';

const App = () => {
  const [playlistName, setPlaylistName] = useState('Nova Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    if (!playlistTracks.some((t) => t.id === track.id)) {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((t) => t.id !== track.id),
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = async () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    await Spotify.savePlaylist(playlistName, trackUris);
    setPlaylistName('Nova Playlist');
    setPlaylistTracks([]);
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onAdd={addTrack} />
      <Playlist
        name={playlistName}
        tracks={playlistTracks}
        onRemove={removeTrack}
        onNameChange={updatePlaylistName}
        onSave={savePlaylist}
      />
    </div>
  );
};

export default App;
