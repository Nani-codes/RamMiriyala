import PropTypes from "prop-types";

const LandingPageGallery1 = ({ className = "" }) => {
  return (
    <div
      className={`mt-[5rem] w-[100%] bg-black max-w-full h-[450px] text-center text-5xl text-red-200 font-rammetto-one ${className}`}
    >
      <div className="relative bottom-[50px] left-[calc(50%_-_180px)] w-[360px] flex flex-row flex-wrap items-center justify-between">
        <img
          className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-2610613@2x.png"
        />
        <div className="relative tracking-[0.01em] text-wheat-200 [text-shadow:2px_0_0_#ffd293,_0_2px_0_#ffd293,_-2px_0_0_#ffd293,_0_-2px_0_#ffd293]">
          RAM MIRYALA
        </div>
        <div className="relative tracking-[0.01em]">EVENT @</div>
        <img
          className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-2610627@2x.png"
        />
        <div className="relative tracking-[0.01em] text-wheat-200 [text-shadow:2px_0_0_#ffd293,_0_2px_0_#ffd293,_-2px_0_0_#ffd293,_0_-2px_0_#ffd293]">
          MAKAU
        </div>
        <img
          className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-2610629@2x.png"
        />
        <div className="relative">LIVE</div>
        <img
          className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-2610630@2x.png"
        />
        <div className="relative">MUSIC</div>
        <img
          className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-2610632@2x.png"
        />
      </div>
      <div className="absolute top-[640px] left-[calc(50%_-_180px)] w-[360px] h-[640px]" />
    </div>
  );
};

LandingPageGallery1.propTypes = {
  className: PropTypes.string,
};

export default LandingPageGallery1;
