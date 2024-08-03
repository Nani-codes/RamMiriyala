import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start gap-[31px] text-left text-base text-red-100 font-manrope ${className}`}
    >
      
      <FrameComponent1
        propAlignSelf="stretch"
        propFlex="unset"
        screenshot20240708At11314="/screenshot-20240708-at-113148am-1-2@2x.png"
        propTop="calc(50% - 141px)"
        alaiBalai="Kallu Thaaga"
        alaiBalaiTextDecoration="none"
      />
      <div className="w-[254px] h-[52px] flex flex-row items-start justify-end py-0 pl-[13px] pr-4 box-border">
        <div className="h-[55px] flex-1 [backdrop-filter:blur(8px)] border-red-100 border-[3px] border-solid box-border overflow-hidden flex flex-row items-start justify-start pt-5 pb-[8.7px] pl-5 pr-[17px] gap-2.5">
          <div className="w-[100px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
            <img
              className="self-stretch h-[17.3px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/arrow-1.svg"
            />
          </div>
          <div className="h-3 relative font-semibold inline-block min-w-[72px]">
            and more
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4