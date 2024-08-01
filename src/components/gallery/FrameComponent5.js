import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start max-w-full text-left text-5xl text-red-100 font-rammetto-one ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-5 max-w-full mq450:flex-wrap">
        <div className="relative leading-[40px] inline-block max-w-full mq450:text-lgi mq450:leading-[32px]">
          On the other side - Live
        </div>
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/mdicancelbold.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-0 text-xl text-wheat-100 font-manrope mq725:flex-wrap">
        <div className="w-[923px] relative leading-[28px] inline-block max-w-full mq450:text-base mq450:leading-[22px]">
          Live at Makau on 12th of July
        </div>
        <div className="flex flex-row items-center justify-start py-0 px-1 gap-4">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/antdesignspotifyoutlined.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/mingcuteyoutubeline.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/ritwitterxfill.svg"
          />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/mdiinstagram.svg"
          />
        </div>
      </div>
    </header>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;