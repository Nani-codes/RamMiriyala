import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1412px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-center text-15xl text-red-200 font-rammetto-one ${className}`}
    >
      <div className="w-[1000px] [backdrop-filter:blur(8px)] bg-gray-200 flex flex-col items-center justify-start gap-[21px] max-w-full z-[1]">
        <div className="self-stretch relative mq450:text-xl mq750:text-8xl">
          Upcoming event
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[17px] px-[25px] gap-[20px] text-left text-31xl mq1100:flex-wrap mq1100:justify-center">
          <div className="flex flex-row items-center justify-center p-2.5">
            <div className="relative mq450:text-11xl mq750:text-21xl">
              <span>{`23 `}</span>
              <span className="font-manrope">days</span>
            </div>
          </div>
          <h1 className="m-0 w-[29px] relative text-61xl font-normal font-inherit inline-block mq450:text-5xl mq750:text-21xl">
            :
          </h1>
          <div className="flex flex-row items-center justify-center p-2.5">
            <h3 className="m-0 relative text-inherit font-inherit mq450:text-11xl mq750:text-21xl">
              <span>{`3 `}</span>
              <span className="font-manrope">hours</span>
            </h3>
          </div>
          <h1 className="m-0 w-[29px] relative text-61xl font-normal font-inherit inline-block mq450:text-5xl mq750:text-21xl">
            :
          </h1>
          <div className="flex flex-row items-center justify-center p-2.5">
            <div className="relative mq450:text-11xl mq750:text-21xl">
              <span>{`15 `}</span>
              <span className="font-manrope">mins</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
