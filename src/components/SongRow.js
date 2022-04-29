import React from "react";

const SongRow = ({ track }) => {
  return (
    <div className="song-row">
      <img src={track.album.images[0].url} alt={track.name} />
      <div className="song-row-info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
