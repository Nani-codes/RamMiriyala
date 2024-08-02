import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  return (
    <section
      className={` self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[130px] box-border gap-[30px] max-w-full text-left text-15xl text-red-200 font-manrope mq450:pb-[244px] mq450:box-border mq1100:pb-[375px] mq1100:box-border ${className}`}
    >
      <FrameComponent4 />
      <div style={{"marginTop":"12vh","marginLeft":"20vh","zIndex":"99"}} className="fixed self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1240px] shadow-[2px_2px_10px_4px_rgba(255,_22,_22,_0.2)] [backdrop-filter:blur(8px)] bg-gray-300 overflow-hidden shrink-0 flex flex-row items-start justify-between py-[27px] px-[35px] box-border gap-[20px] max-w-full z-[1] mq1100:flex-wrap">
          <a href ="/music" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl">
            Music
          </a>
          <a href ="/About" className="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl">
            About
          </a>
          <a href ="/Events"className="[text-decoration:none] relative text-[inherit] inline-block min-w-[108px] mq450:text-xl mq750:text-8xl">
            Events
          </a>
          <a href ="/News"className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] mq450:text-xl mq750:text-8xl">
            News
          </a>
          <a href ="/Shop"className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] mq450:text-xl mq750:text-8xl">
            Shop
          </a>
          <a href ="/Gallery"className="[text-decoration:none] relative text-[inherit] inline-block min-w-[87px] mq450:text-xl mq750:text-8xl">
            Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
