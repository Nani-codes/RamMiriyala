import FrameComponent from "../components/gallery/FrameComponent";
import Navbar from "../components/Navbar";
const Gallery = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "fit-content",
        background: "#000000",
      }}
    >
      <Navbar />
      <div className="mt-[10rem] ml-[8rem] w-100% fit-content relative bg-black overflow-hidden flex flex-row items-start justify-start pt-[15px] px-5 pb-[586px] box-border gap-[92px] leading-[normal] tracking-[normal] text-left text-xl text-red-100 font-manrope gap-[23px] gap-[46px] mq1050:h-auto">
        <div className="w-40 flex flex-col items-start justify-start pt-[217px] px-0 pb-0 box-border text-center text-wheat-100 mq450:pt-[141px] mq450:box-border mq725:hidden">
          <div className="self-stretch flex flex-col items-start justify-start gap-1">
            <div className="border-wheat-100 border-b-[0.5px] border-solid flex flex-row items-start justify-start pt-1 px-14 pb-[3px]">
              <div className="relative font-medium inline-block min-w-[48px] mq450:text-base">
                2024
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] text-red-600">
              <div className="flex-1 flex flex-col items-start justify-start gap-2">
                <div className="w-12 relative font-medium flex items-center justify-center min-w-[48px] mq450:text-base">
                  2023
                </div>
                <div className="relative font-medium inline-block min-w-[48px] mq450:text-base">
                  2022
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="relative font-medium inline-block min-w-[44px] mq450:text-base">
                    2021
                  </div>
                </div>
                <div className="relative font-medium inline-block min-w-[49px] mq450:text-base">
                  2020
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-0.5">
                  <div className="relative font-medium inline-block min-w-[45px] mq450:text-base">
                    2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="w-[100%] flex flex-col items-start justify-start gap-[30px] max-w-[calc(100%_-_252px)] shrink-0 mq725:max-w-full">
          <FrameComponent
            onTheOtherSideLive="On the other side - Live"
            liveAtMakauOn12thOfJuly="Live at Makau on 12th of July"
            antDesignspotifyOutlined="/antdesignspotifyoutlined.svg"
            mingcuteyoutubeLine="/mingcuteyoutubeline.svg"
            ritwitterXFill="/ritwitterxfill.svg"
            mdiinstagram="/mdiinstagram.svg"
            frame2610685="/one.png"
            frame2610686="/two.png"
            frame2610687="/three.png"
            frame2610688="/four.png"
            frame2610689="/one.png"
            frame2610690="/two.png"
            frame2610691="/three.png"
            frame2610692="/four.png"
            arrow1="/arrow-1.svg"
          />
          
          <FrameComponent
            onTheOtherSideLive="NYE Gala 2024"
            liveAtMakauOn12thOfJuly="New year musical concert, Vijayawada"
            antDesignspotifyOutlined="/antdesignspotifyoutlined1.svg"
            mingcuteyoutubeLine="/mingcuteyoutubeline1.svg"
            ritwitterXFill="/ritwitterxfill-1.svg"
            mdiinstagram="/mdiinstagram-1.svg"
            frame2610685="/one.png"
            frame2610686="/two.png"
            frame2610687="/three.png"
            frame2610688="/four.png"
            frame2610689="/one.png"
            frame2610690="/two.png"
            frame2610691="/three.png"
            frame2610692="/four.png"

            arrow1="/arrow-1.svg"
            // propBackgroundImage="url('/frame-26106932@3x.png')"
          />
          <FrameComponent
            onTheOtherSideLive="Live @ Trops kitchen"
            liveAtMakauOn12thOfJuly="1st year anniversary celebrations of Trops kitchen"
            antDesignspotifyOutlined="/antdesignspotifyoutlined2.svg"
            mingcuteyoutubeLine="/mingcuteyoutubeline2.svg"
            ritwitterXFill="/ritwitterxfill-2.svg"
            mdiinstagram="/mdiinstagram-2.svg"
            frame2610685="/one.png"
            frame2610686="/two.png"
            frame2610687="/three.png"
            frame2610688="/four.png"
            frame2610689="/one.png"
            frame2610690="/two.png"
            frame2610691="/three.png"
            frame2610692="/four.png"
            arrow1="/arrow-1.svg"
          />
          <FrameComponent
            onTheOtherSideLive="Live @ Trops kitchen"
            liveAtMakauOn12thOfJuly="1st year anniversary celebrations of Trops kitchen"
            antDesignspotifyOutlined="/antdesignspotifyoutlined2.svg"
            mingcuteyoutubeLine="/mingcuteyoutubeline2.svg"
            ritwitterXFill="/ritwitterxfill-2.svg"
            mdiinstagram="/mdiinstagram-2.svg"
            frame2610685="/one.png"
            frame2610686="/two.png"
            frame2610687="/three.png"
            frame2610688="/four.png"
            frame2610689="/one.png"
            frame2610690="/two.png"
            frame2610691="/three.png"
            frame2610692="/four.png"
            arrow1="/arrow-1.svg"
          />
        </main>
      </div>
    </div>
  );
};

export default Gallery;
