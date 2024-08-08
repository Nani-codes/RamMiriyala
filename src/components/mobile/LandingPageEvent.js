import FrameComponent1 from "../FrameComponent1";
import EventImage from "../EventImage";
import PropTypes from "prop-types";

const LandingPageEvent = ({ className = "" }) => {
  return (
    <section
      className={` self-stretch flex flex-col items-start justify-start pt-0  px-0 box-border gap-[51px] max-w-full shrink-0 text-left text-61xl text-red-300 font-rammetto-one mq1275:pb-[159px] mq1275:box-border mq750:gap-[25px] mq750:pb-[67px] mq750:box-border mq1100:pb-[103px] mq1100:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-10 box-border max-w-full">
        <h1 className="m-0 w-[100%] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-[103%] mq450:text-5xl mq750:text-21xl">
          NEVER MISS A <br/> MOMENT ON STAGE
        </h1>
      </div>
      <div className="  w-[100%] flex flex-col items-end justify-start gap-[80px] max-w-[100%] shrink-0 text-5xl text-wheat-100 font-manrope mq450:gap-[20px] mq750:gap-[40px]">
        <div className=" w-[100%] overflow-x-auto flex flex-row items-center justify-start py-0 pr-0 box-border gap-[50px] max-w-full mq750:gap-[25px]">
          <EventImage emptyOne="/frame-2610613@2x.png" />
          <EventImage emptyOne="/frame-2610631@2x.png" />
          <EventImage emptyOne="/frame-2610629@2x.png" />
          <EventImage emptyOne="/frame-2610632@2x.png" />
          <EventImage emptyOne="/frame-2610613@2x.png" />
          <EventImage emptyOne="/frame-2610631@2x.png" />
          <EventImage emptyOne="/frame-2610629@2x.png" />
          <EventImage emptyOne="/frame-2610632@2x.png" />
        </div>
        <a
          href="/events"
          className="[text-decoration:none] w-[730px] h-[62px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-11xl text-red-200 mq450:h-auto"
        >
          <div className="w-[393px] [backdrop-filter:blur(8px)] bg-black box-border overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-start pt-5 pb-[13.7px] pr-[17px] pl-5 gap-[10px] min-h-[65px] max-w-[calc(100%_-_0px)] border-[3px] border-solid border-red-200">
            <div className="mb-[1rem] h-[22px] relative font-semibold inline-block mq450:text-lg mq750:text-5xl">
              All events
            </div>
            <div className="h-[17.3px] flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[130px]">
              <img
                className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/arrow-1-1.svg"
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

LandingPageEvent.propTypes = {
  className: PropTypes.string,
};

export default LandingPageEvent;
