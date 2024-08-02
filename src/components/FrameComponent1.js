import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "", emptyOne }) => {
  return (
    <div
      className={`w-[440px] [backdrop-filter:blur(4px)] bg-wheat-300 shrink-0 flex flex-col items-center justify-center pt-10 px-0 pb-5 box-border gap-[40px] max-w-full text-left text-5xl text-wheat-100 font-manrope mq450:gap-[20px] mq750:pt-[26px] mq750:box-border ${className}`}
    >
      <img
        className="w-[250px] h-[250px] relative overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={emptyOne}
      />
      <div className="self-stretch flex flex-col items-end justify-end p-5 gap-[40px] mq450:gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch relative text-15xl font-semibold mq450:text-xl mq750:text-8xl">
            Odeum by Prism
          </div>
          <div className="flex flex-row items-center justify-start gap-[20px] text-goldenrod">
            <div className="[backdrop-filter:blur(8px)] bg-black flex flex-row items-center justify-center py-[5px] px-5">
              <div className="relative font-medium inline-block min-w-[48px] mq450:text-lgi">
                LIVE
              </div>
            </div>
            <div className="relative text-wheat-100 inline-block min-w-[100px] mq450:text-lgi">
              on Friday
            </div>
          </div>
          <div className="self-stretch relative mq450:text-lgi">
            Other details of the evnet can be listed down here
          </div>
        </div>
        <div className="w-[70px] [backdrop-filter:blur(8px)] bg-black flex flex-col items-start justify-center pt-[30px] px-2.5 pb-[12.7px] box-border">
          <img
            className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/arrow-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  emptyOne: PropTypes.string,
};

export default FrameComponent1;
