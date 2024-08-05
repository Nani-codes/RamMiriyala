import InstanceContainer from "../components/InstanceContainer";
import FrameComponent2 from "../components/FrameComponent2";
import SingerDescription from "../components/SingerDescription";
import StageMoment from "../components/StageMoment";
import TrainersTitleContainer from "../components/TrainersTitleContainer";
import Footer from "../components/Footer";
import LandingMusic from "../components/LandingMusic";
import "../global.css";
import MediaQuery from "react-responsive";
import LandingPage from "../components/mobile/LandingPage";
import Menu from "../components/mobile/Menu";
import LandingPageMusic from "../components/mobile/LandingPageMusic";
import LandingPageAbout from "../components/mobile/LandingPageAbout";
import LandingPageEvent from "../components/mobile/LandingPageEvent";
import LandingPageLyrics from "../components/mobile/LandingPageLyrics";
import LandingPageShop from "../components/mobile/LandingPageShop";
import LandingPageGallery1 from "../components/mobile/LandingPageGallery1";
import LandingPageGallery2 from "../components/mobile/LandingPageGallery2";
const Desktop = () => {
  return (
    <div>
      <MediaQuery minWidth={1400}>
        <div className="w-full fit-content relative bg-black overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] scrollbar">
          <img
            className="w-full fit-content h-[1080px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/1709385318633-3-1@2x.png"
          />
          {/* <ResponsiveNavbar/> */}
          <InstanceContainer />
          <FrameComponent2 />
          <LandingMusic />
          <SingerDescription />
          <StageMoment />
          <TrainersTitleContainer />
          <Footer />
        </div>
      </MediaQuery>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "#000000",
        }}
      >
        <MediaQuery maxWidth={900}>
          <div className="w-full fit-content relative bg-black overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] scrollbar">
            <img
              className="w-full fit-content h-[1080px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/1709385318633-3-1@2x.png"
            />
            <Menu />
            <LandingPage />
            <LandingPageMusic />
            <LandingPageAbout/>
            <LandingPageEvent/>
            <LandingPageLyrics/>
            <LandingPageShop/>
            <LandingPageGallery1/>
            <LandingPageGallery2/>
            <Footer></Footer>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default Desktop;
