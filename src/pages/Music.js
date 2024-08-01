import React from "react";
import InstanceContainer from "../components/InstanceContainer";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import SingerDescription from "../components/SingerDescription";
import StageMoment from "../components/StageMoment";
import TrainersTitleContainer from "../components/TrainersTitleContainer";
import Footer from "../components/Footer";
import MusicScroller from "../components/MusicScroller"
import Navbar from "../components/Navbar"
function Music() {
  return (
    <div style={{"position": "relative","width": "100%","height": "100vh", "background":"#000000"}}>

      <Navbar/>
      <MusicScroller/>
    </div>
  );
}

export default Music;




