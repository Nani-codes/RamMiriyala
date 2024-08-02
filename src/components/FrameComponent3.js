import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 pb-[145.5px] pr-0 pl-px box-border max-w-full text-left text-31xl text-red-200 font-rammetto-one mq450:pb-[95px] mq450:box-border ${className}`}
    >
      <div className="w-[1439px] flex flex-col items-end justify-start py-0 pr-[100px] pl-0 box-border gap-[42.5px] max-w-full mq1275:pr-[50px] mq1275:box-border mq750:gap-[21px] mq750:pr-[25px] mq750:box-border">
        <div className="mr-[-101px] w-[1440px] h-[150px] overflow-hidden shrink-0 flex flex-row items-end justify-start max-w-[108%]">
          <div className="mb-[-154px] h-[701px] flex-1 relative max-w-full">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              alt=""
              src="/screenshot-20240708-at-113148am-1-2@2x.png"
            />
            <div className="absolute top-[397px] left-[0px] [background:linear-gradient(90deg,_rgba(0,_0,_0,_0.4),_rgba(29,_29,_29,_0.4)_50%,_rgba(71,_71,_71,_0.4))] w-[1440px] h-[150px] overflow-hidden [mix-blend-mode:linear-burn] z-[1]">
              <h3 className="m-0 absolute top-[33px] left-[49px] text-inherit font-normal font-inherit z-[2] mq450:text-11xl mq750:text-21xl">
                Kallu Thaaga
              </h3>
            </div>
          </div>
        </div>
        <div className="w-[387px] [backdrop-filter:blur(8px)] bg-black box-border overflow-hidden flex flex-row flex-wrap items-start justify-start pt-4 pb-2.5 pr-[17px] pl-5 gap-[10px] min-h-[65px] max-w-full shrink-0 text-11xl font-manrope border-[3px] border-solid border-red-200">
          <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[130px]">
            <img
              className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
              alt=""
              src="/arrow-1-1.svg"
            />
          </div>
          <div className="h-[22px] relative font-semibold inline-block mq450:text-lg mq750:text-5xl">
            and more
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
