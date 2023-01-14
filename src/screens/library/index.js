import React, { useState, useEffect } from "react";
import APIkit from "../../spotify.js";
import Card from "../../components/card/index.js";
import "./library.css"

export default function Library() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIkit.get("me/playlists").then((res) => {
      setPlaylists(res.data.items);
      console.log(playlists);
    });
  }, []);

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists?.map((playlist) => (
          <Card playlist={playlist}/>
        ))}
      </div>
    </div>
  );
}
