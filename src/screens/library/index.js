import React, { useState, useEffect } from "react";
import APIkit from "../../spotify.js";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIkit.get("me/playlists").then((res) => {
      setPlaylists(res.data.items);
      console.log(playlists)
    });
  }, []);
  return <div className="screen-container">
    {
      playlists?.map((playlist) => (
        <div>{playlist.name}</div>
      ))
    }
  </div>;
}
