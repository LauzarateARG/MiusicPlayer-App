import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "../favorites";
import Feed from "../feed";
import Library from "../library/index.js";
import Player from "../player";
import Trending from "../trending";
import Slidebar from "../../components/sidebar";
import Login from "../auth/login";
import "./home.css";

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    const hash = window.location.hash;
    window.location.hash = ""
    if(!token && hash){
      const hash = window.location.hash;
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
    }else{
      setToken(token)
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body">
        <Slidebar />
        <Routes>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
}
