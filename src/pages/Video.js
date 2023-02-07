import React from "react";
import Player from "../components/details/Player";
import VideoDescription from "../components/details/VideoDescription";
import RelatedVideoList from "../components/relatedVideo/RelatedVideoList";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Video = () => {
  return (
    <div>
      
      <Player />
      <VideoDescription />
      <RelatedVideoList />
      
    </div>
  );
};

export default Video;