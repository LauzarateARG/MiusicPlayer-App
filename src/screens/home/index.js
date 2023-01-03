import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "../favorites";
import Feed from "../feed";
import Library from "../library/index.js";
import Player from "../player";
import Trending from "../trending";
import Slidebar from "../../components/sidebar";
import "./home.css";

export default function Home() {
  return (
    <Router>
      <div className="main-body">
        <Slidebar/>
        <Routes>
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/feed" element={<Feed/>} />
          <Route path="/" element={<Library/>} />
          <Route path="/player" element={<Player/>} />
          <Route path="/trending" element={<Trending/>} />
        </Routes>
        
      </div>
    </Router>
  );
}
