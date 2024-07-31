import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";

const InstanceContainer = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[577px] box-border gap-[30px] max-w-full text-left text-15xl text-red-200 font-manrope mq450:pb-[244px] mq450:box-border mq1100:pb-[375px] mq1100:box-border ${className}`}
    >
      <FrameComponent4 />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1240px] shadow-[2px_2px_10px_4px_rgba(255,_22,_22,_0.2)] [backdrop-filter:blur(8px)] bg-gray-300 overflow-hidden shrink-0 flex flex-row items-start justify-between py-[27px] px-[35px] box-border gap-[20px] max-w-full z-[1] mq1100:flex-wrap">
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl">
            Music
          </a>
          <div className="relative inline-block min-w-[96px] mq450:text-xl mq750:text-8xl">
            About
          </div>
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[108px] mq450:text-xl mq750:text-8xl">
            Events
          </a>
          <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] mq450:text-xl mq750:text-8xl">
            News
          </a>
          <div className="relative inline-block min-w-[82px] mq450:text-xl mq750:text-8xl">
            Shop
          </div>
          <div className="relative inline-block min-w-[110px] mq450:text-xl mq750:text-8xl">
            Gallery
          </div>
        </div>
      </div>
    </section>
  );
};

InstanceContainer.propTypes = {
  className: PropTypes.string,
};

export default InstanceContainer;
