import "./App.css";
import React from "react";
import { json } from "./Videos/Components/json";
import VideoPlayer from "./Videos/Components/Video";

function App() {
  return (
    <div className="container">
      <div className="background">
        <img src="https://naturespath.com/cdn/shop/articles/soil-and-dirt.jpg?v=1639150256" alt="background"/>
      </div>
      <div className="titulo">
        <h1>Purifica la tierra</h1>
      </div>
      <div className="videos__container">
        {json.map((video) => (
          <VideoPlayer src={video.src}/>
        ))}
      </div>
      <div className="sendVideo">

      </div>
    </div>
  );
}

export default App;
