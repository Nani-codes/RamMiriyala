import { useState, useMemo, useCallback } from "react";
import PicsOfEventOverlay from "./PicsOfEventOverlay";
import GalleryPopup from "./GalleryPopup";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  onTheOtherSideLive,
  liveAtMakauOn12thOfJuly,
  antDesignspotifyOutlined,
  mingcuteyoutubeLine,
  ritwitterXFill,
  mdiinstagram,
  frame2610685,
  frame2610686,
  frame2610687,
  frame2610688,
  frame2610689,
  frame2610690,
  frame2610691,
  frame2610692,
  arrow1,
  propBackgroundImage,
}) => {
  const [isPicsOfEventOverlayOpen, setPicsOfEventOverlayOpen] = useState(false);
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const openPicsOfEventOverlay = useCallback(() => {
    setPicsOfEventOverlayOpen(true);
  }, []);

  const closePicsOfEventOverlay = useCallback(() => {
    setPicsOfEventOverlayOpen(false);
  }, []);

  return (
    <>
      <section
        className={`self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-5xl text-red-100 font-rammetto-one ${className}`}
      >
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch relative leading-[40px] mq450:text-lgi mq450:leading-[32px]">
            {onTheOtherSideLive}
          </div>
          <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-0 text-xl text-wheat-100 font-manrope mq1050:flex-wrap">
            <div className="w-[931px] relative leading-[28px] inline-block max-w-full mq450:text-base mq450:leading-[22px]">
              {liveAtMakauOn12thOfJuly}
            </div>
            <div className="flex flex-row items-center justify-start gap-4">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                loading="lazy"
                alt=""
                src={antDesignspotifyOutlined}
              />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                loading="lazy"
                alt=""
                src={mingcuteyoutubeLine}
              />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                alt=""
                src={ritwitterXFill}
              />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                alt=""
                src={mdiinstagram}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-5 mq1000:flex-wrap">
          <img
            className="self-stretch flex-1 relative max-w-[98px] overflow-hidden max-h-full object-cover min-w-[96px] min-h-[148px]"
            loading="lazy"
            alt=""
            src={frame2610685}
          />
          <img
            className="self-stretch flex-1 relative max-w-[98px] overflow-hidden max-h-full object-cover min-w-[96px] min-h-[148px]"
            loading="lazy"
            alt=""
            src={frame2610686}
          />
          <img
            className="self-stretch flex-1 relative max-w-[98px] overflow-hidden max-h-full object-cover min-w-[96px] min-h-[148px]"
            loading="lazy"
            alt=""
            src={frame2610687}
          />
          <img
            className="self-stretch flex-1 relative max-w-[98px] overflow-hidden max-h-full object-cover min-w-[96px] min-h-[148px]"
            loading="lazy"
            alt=""
            src={frame2610688}
          />
          <img
            className="self-stretch flex-1 relative max-w-[98px] overflow-hidden max-h-full object-cover min-w-[96px] min-h-[148px]"
            loading="lazy"
            alt=""
            src={frame2610689}
          />
          <img
            className="self-stretch flex-1 relative max-w-[98px] overflow-hidden max-h-full object-cover min-w-[96px] min-h-[148px]"
            loading="lazy"
            alt=""
            src={frame2610690}
          />
          <img
            className="self-stretch flex-1 relative max-w-[98px] overflow-hidden max-h-full object-cover min-w-[96px] min-h-[148px]"
            loading="lazy"
            alt=""
            src={frame2610691}
          />
          <img
            className="self-stretch flex-1 relative max-w-[98px] overflow-hidden max-h-full object-cover min-w-[96px] min-h-[148px]"
            loading="lazy"
            alt=""
            src={frame2610692}
          />
          <div
            className="flex-[0.7143] overflow-hidden flex flex-row items-start justify-start pt-[88px] px-3.5 pb-0 box-border bg-cover bg-no-repeat bg-[top] min-w-[96px] max-w-[98px] cursor-pointer mq450:flex-1"

            onClick={openPicsOfEventOverlay}
            style={frameDivStyle}
          >
            <div className="h-[60px] flex-1 [backdrop-filter:blur(8px)] flex flex-col items-start justify-center py-[30px] px-2.5 box-border">
              <img
                className="self-stretch h-[11.5px] relative max-w-full overflow-hidden shrink-0"
                alt=""
                src={arrow1}
              />
            </div>
          </div>
        </div>
      </section>
      {isPicsOfEventOverlayOpen && (
        <GalleryPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePicsOfEventOverlay}
        >
          <PicsOfEventOverlay onClose={closePicsOfEventOverlay} />
        </GalleryPopup>
      )}
    </>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  onTheOtherSideLive: PropTypes.string,
  liveAtMakauOn12thOfJuly: PropTypes.string,
  antDesignspotifyOutlined: PropTypes.string,
  mingcuteyoutubeLine: PropTypes.string,
  ritwitterXFill: PropTypes.string,
  mdiinstagram: PropTypes.string,
  frame2610685: PropTypes.string,
  frame2610686: PropTypes.string,
  frame2610687: PropTypes.string,
  frame2610688: PropTypes.string,
  frame2610689: PropTypes.string,
  frame2610690: PropTypes.string,
  frame2610691: PropTypes.string,
  frame2610692: PropTypes.string,
  arrow1: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default FrameComponent;
