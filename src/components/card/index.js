import React from "react";
import "./card.css";
import { BiCaretRight } from "react-icons/bi";

export default function Card({ playlist }) {
  return (
    <div className="playlist-card">
      <div className="card-img-contain">
        <img
          src={playlist.images[0].url}
          className="playlist-image"
          alt="Playlist-Art"
        />

        <div className="playlist-fade">
          <button className="circle-play-icon">
            <BiCaretRight className="play-icon" />
          </button>
        </div>
      </div>
      <div className="playlist-detail">
        <p className="playlist-title">{playlist.name}</p>
        <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
      </div>
    </div>
  );
}
