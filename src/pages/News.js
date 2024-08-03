import React from "react";
import InstanceContainer from "../components/InstanceContainer";
import FrameComponent2 from "../components/FrameComponent2";
import SingerDescription from "../components/SingerDescription";
import StageMoment from "../components/StageMoment";
import TrainersTitleContainer from "../components/TrainersTitleContainer";
import Footer from "../components/Footer";
import MusicScroller from "../components/MusicScroller";
import Navbar from "../components/Navbar";
import MediaQuery from "react-responsive";
import Menu from "../components/mobile/Menu"
import MusicPage from "../components/music/MusicPage"

function Music() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "fit-content",
        background: "#000000",
      }}
    >
      <MediaQuery minWidth={1400}>
        <Navbar />
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "fit-content",
            background: "#000000",
          }}
        >
          <Menu></Menu>
        </div>
      </MediaQuery>
    </div>
  );
}

export default Music;